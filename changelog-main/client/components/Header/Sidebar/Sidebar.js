import React, { useState } from "react";
import { RiUser3Fill } from "react-icons/ri";
import { IoCaretDown } from "react-icons/io5";
import { useRouter } from "next/router";
import Link from "next/link";
import { useGlobalAuthContext } from "/context/AuthContext";
import axios from "axios";
const Sidebar = () => {
  const { user, setUser, getCookie } = useGlobalAuthContext();
  const router = useRouter();
  const [showProductsModal, setShowProductsModal] = useState(false);

  const updateCurrentProduct = async (currentProduct) => {
    try {
      const config = {
        headers: {
          authorization: getCookie("access-token"),
        },
      };
      const data = {
        currentProduct,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/user/update-current-product`,
        data,
        config
      );
      setUser(res.data.updatedUser);

      console.log("RES", res, "USER", user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 w-[250px] flex flex-col items-start text-gray-500 justify-between border-r-[1px] border-gray-200 py-8 px-3">
      <div className="flex flex-col w-full gap-8">
        <Link href="/">Logo</Link>

        <div className="flex flex-col items-start justify-start w-full gap-1">
          <p className="pl-4 text-sm opacity-80">Navigation</p>
          <Link
            href="/"
            className="w-full py-1.5 rounded-standard/4 pl-4 font-medium text-left text-Primary bg-Primary/5"
          >
            Dashboard
          </Link>
          <Link
            href={`/${user?.products[user?.currentProduct]?.domainName}`}
            className="w-full py-1.5 rounded-standard/4 pl-4 font-medium text-left  hover:bg-Primary/5"
          >
            Changelog
          </Link>
          <button className="w-full py-1.5 rounded-standard/4 pl-4 font-medium text-left  hover:bg-Primary/5">
            Stats
          </button>
        </div>
        <div className="flex flex-col items-start justify-start w-full gap-1">
          <p className="pl-4 text-sm opacity-80">Teams</p>
          <button className="w-full py-1.5 rounded-standard/4 pl-4 font-medium text-left  hover:bg-Primary/5">
            Manage Team
          </button>
        </div>
        <div className="flex flex-col items-start justify-start w-full gap-1">
          <p className="pl-4 text-sm opacity-80">Others</p>
          <button className="w-full py-1.5 rounded-standard/4 pl-4 font-medium text-left  hover:bg-Primary/5">
            Your Products
          </button>
          <button className="w-full py-1.5 rounded-standard/4 pl-4 font-medium text-left  hover:bg-Primary/5">
            Profile
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-end w-full">
        {showProductsModal && (
          <div className="flex flex-col items-center justify-end w-full gap-2 mb-4">
            {user?.products?.map((item, i) => (
              <button
                key={i}
                onClick={() => updateCurrentProduct(i)}
                className={`border-[1px] border-gray-200 text-sm rounded-standard/4 w-full py-3 font-medium ${
                  i === user?.currentProduct
                    ? "bg-Primary text-white"
                    : "bg-transparent text-Primary"
                }`}
              >
                {item?.name}
              </button>
            ))}
            <Link
              href="/addProduct"
              className="border-[1px] text-center border-gray-200 text-sm rounded-standard/4 w-full py-3 font-medium text-Primary"
            >
              Create New Product
            </Link>
          </div>
        )}

        <button
          onClick={() => setShowProductsModal(!showProductsModal)}
          className="flex items-center justify-between w-full gap-3"
        >
          <p className="p-1 text-white bg-gray-500 rounded-full">
            <RiUser3Fill className="text-2xl rounded-full" />
          </p>
          <div className="flex flex-col items-start justify-start gap-0">
            <p className="text-sm font-medium ">{user?.name}</p>
            <p className="text-xs font-normal opacity-80">{user?.email}</p>
          </div>

          <IoCaretDown className="text-lg rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
