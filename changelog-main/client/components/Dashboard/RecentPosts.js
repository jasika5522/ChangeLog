import React, { useState, useEffect } from "react";
import changelogimageplaceholdersmall from "../../public/changelog-image-placeholder-small.jpg";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { useRouter } from "next/router";
import { useGlobalAuthContext } from "/context/AuthContext";

import axios from "axios";
const RecentPosts = () => {
  const router = useRouter();
  const { user, getCookie } = useGlobalAuthContext();
  const [updates, setUpdates] = useState(null);
  useEffect(() => {
    const getAllUpdates = async () => {
      if (user) {
        console.log(user);
        try {
          console.log(user?.products[user?.currentProduct]?.id, "START");
          const config = {
            headers: {
              authorization: getCookie("access-token"),
              productId: user?.products[user?.currentProduct]?.id,
            },
          };
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/update`,
            config
          );
          setUpdates(res.data.data);
          console.log("Public Page", res.data.data);
        } catch (err) {
          console.log("ERROR IN PUBLIC PAGE", err);
        } finally {
          console.log("DONE");
        }
      }
    };
    getAllUpdates();
  }, [getCookie, router, user]);

  const cvtDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full p-4 border-[1px] border-gray-200 rounded-standard/2 shadow-lg shadow-slate-100">
      <div className="flex items-center justify-between w-full ">
        <p className="text-xl font-medium">Recent Changelogs</p>
        <button
          onClick={() => router.push("/new")}
          className="flex items-center justify-center gap-2 px-4 py-1 font-medium text-white bg-Primary rounded-standard/4"
        >
          Create New <IoMdAdd className="text-lg text-white" />
        </button>
      </div>

      <div className="flex flex-col items-start justify-start w-full gap-3 ">
        {updates?.length === 0 ? (
          <p className="text-xl opacity-70">No changelogs available</p>
        ) : (
          updates?.map((item, i) => {
            return (
              <div
                key={item?.id}
                className="flex items-start justify-between w-full bg-gray-100/70"
              >
                <div className="flex items-start">
                  <Image
                    width={170}
                    src={changelogimageplaceholdersmall}
                    alt="changelogimageplaceholdersmall"
                  />
                  <div className="flex flex-col items-start p-2">
                    <p className="font-medium text-black/90">{item?.title}</p>
                    <p className="text-sm opacity-70">
                      {cvtDate(item?.createdAt)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between h-full gap-6 p-2">
                  <div className="flex items-center justify-center gap-4 p-2">
                    <button className="px-4 py-2 text-xs font-medium transition-all duration-300 group text-center min-w-[120px] ring-Primary/30 ring-1 text-Primary rounded-standard/4">
                      <p className="group-hover:hidden">Saved As Draft</p>
                      <p className="hidden group-hover:block">Publish?</p>
                    </button>
                    <button className="flex items-center justify-center gap-1 px-4  border-[1px] border-gray-200 py-3 rounded-standard/4">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    </button>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-green-600">v2.0</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default RecentPosts;
