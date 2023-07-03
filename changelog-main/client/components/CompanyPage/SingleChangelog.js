import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/router";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const SingleChangelog = ({ item }) => {
  const [quill, setQuill] = useState(null);
  useEffect(() => {
    if (quill == null) return;
    quill?.editor?.disable();
  }, [quill]);

  const cvtDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const router = useRouter();

  return (
    <>
      <button
        onClick={() => router.push("/")}
        className="px-3 py-1 font-medium bg-gray-200 rounded-md "
      >
        Back to dashboard
      </button>
      <div className="flex flex-col items-center justify-center w-full gap-10 p-2 bg-gray-100 rounded-md">
        <div className="flex flex-col items-start justify-start w-full gap-1">
          <p className="flex items-center justify-center gap-2 text-3xl font-semibold capitalize">
            <span>New {item?.type} :</span>
            <span>{item?.title}</span>
          </p>
          <p>
            <span className="font-semibold text-white bg-green-600 px-2  rounded-md py-0.5">
              {item?.version}
            </span>
            <span className="italic opacity-70">
              at {cvtDate(item?.createdAt)}
            </span>
          </p>
        </div>
        <div className="flex items-start justify-start w-full felx-col">
          <ReactQuill
            value={JSON.parse(item?.body)}
            readOnly={true}
            theme={null}
            ref={setQuill}
            className="prose prose-h1:text-4xl prose-h1:font-semibold"
          />
          {/* <TextEditor /> */}
        </div>
      </div>
    </>
  );
};

export default SingleChangelog;
