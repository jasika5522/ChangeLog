import React, { useState, useEffect } from "react";
import { useGlobalAuthContext } from "/context/AuthContext";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import axios from "axios";
import SingleChangelog from "./SingleChangelog";
import { useGlobalPublicPageContext } from "/context/PublicPageContext";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import TextEditor from "./TextEditor";
const MainPage = () => {
  const { user, getCookie } = useGlobalAuthContext();
  const { currentProductData, setCurrentProductData } =
    useGlobalPublicPageContext();
  const [quill, setQuill] = useState(null);
  // const [updates, setUpdates] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (quill == null) return;
    quill?.editor?.disable();
  }, [quill]);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 p-4 ">
      <div className="flex items-center justify-between w-full">
        <p>Logo</p>
        <button className="px-3 py-1 font-medium text-white bg-Blue rounded-standard/4">
          Subscribe
        </button>
      </div>
      <p className="text-3xl font-medium capitalize">
        See whats new at{" "}
        <span className="italic font-semibold">
          {user?.products[user?.currentProduct]?.name}
        </span>
      </p>
      {/*  */}
      {currentProductData?.updates?.map(
        (item, i) =>
          item.isPublic == true && <SingleChangelog key={i} item={item} />
      )}
    </div>
  );
};

export default MainPage;
