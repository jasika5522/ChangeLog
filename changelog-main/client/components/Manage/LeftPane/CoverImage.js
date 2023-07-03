import React from "react";
import Input from "/components/UI/Input";
import { useGlobalManageContext } from "/context/ManageContext";
const CoverImage = () => {
  const { featureImage, setFeatureImage, socialImage, setSocialImage } =
    useGlobalManageContext();

  return (
    <div className="w-full border-[1px] border-gray-200 rounded-standard/2 shadow-lg flex flex-col items-start justify-start gap-8 shadow-slate-100 p-4">
      <div className="flex flex-col items-start justify-start w-full gap-4">
        <div>
          <p className="text-lg font-medium">Cover Image</p>
          <p className="text-sm font-light opacity-90">
            Cover image refers to the image that you will see above your new
            relese post.
          </p>
        </div>
        {/* <p className="text-lg font-medium">Cover Image</p> */}
        <div className="flex items-center justify-center w-full ">
          <div className="w-full">
            <Input
              value={featureImage}
              onChange={(e) => setFeatureImage(e.target.value)}
              // label="Cover Image"
              placeholder="Enter your Cover Image"
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* <label
            htmlFor="coverImage"
            className="w-full py-2 text-base font-normal hover:bg-gray-200 cursor-pointer duration-200 transition-all ease-in-out text-center text-black/70 border-[1px] border-gray-200 rounded-l-standard/2"
          >
            Choose file
          </label>
          <label
            htmlFor="coverImage"
            className="py-2 text-base font-normal bg-gray-200 px-2 duration-200 transition-all ease-in-out text-center text-black/70 border-[1px] border-gray-200 rounded-r-standard/2"
          >
            Browse
          </label>
          <input
            type="file"
            name="coverImage"
            id="coverImage"
            className="hidden"
          /> */}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full gap-4">
        <div>
          <p className="text-lg font-medium">Social Image</p>
          <p className="text-sm font-light opacity-90">
            Social image refers to the image that you will see when you share
            this posts on social media.
          </p>
        </div>
        <div className="flex items-center justify-center w-full ">
          <div className="w-full">
            <Input
              value={socialImage}
              onChange={(e) => setSocialImage(e.target.value)}
              // label="Social Image"
              placeholder="Enter your label"
              // value={title}
              // onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* <label
            htmlFor="coverImage"
            className="w-full py-2 text-base font-normal hover:bg-gray-200 cursor-pointer duration-200 transition-all ease-in-out text-center text-black/70 border-[1px] border-gray-200 rounded-l-standard/2"
          >
            Choose file
          </label>
          <label
            htmlFor="coverImage"
            className="py-2 text-base font-normal bg-gray-200 px-2 duration-200 transition-all ease-in-out text-center text-black/70 border-[1px] border-gray-200 rounded-r-standard/2"
          >
            Browse
          </label>
          <input
            type="file"
            name="coverImage"
            id="coverImage"
            className="hidden"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default CoverImage;
