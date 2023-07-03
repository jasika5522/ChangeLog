import React from "react";
import { useGlobalManageContext } from "/context/ManageContext";

const SaveComponent = () => {
  const { isPublic, setIsPublic, feedbackFlag, setFeedbackFlag } =
    useGlobalManageContext();

  return (
    <div className="w-full border-[1px] border-gray-200 rounded-standard/2 shadow-lg flex flex-col items-start justify-start gap-4 shadow-slate-100 p-4">
      <p className="text-lg font-medium">Save</p>
      <button className="w-full py-2 text-base font-normal hover:bg-gray-100 duration-200 transition-all ease-in-out text-center text-black/70 border-[1px] border-gray-200 rounded-standard/2">
        Preview Release
      </button>
      <button
        onClick={() => setIsPublic(!isPublic)}
        className="flex items-center justify-center w-full gap-4 font-medium "
      >
        <p className={`${!isPublic && "opacity-60"}`}>Public</p>
        <div className="flex items-center justify-start p-1 rounded-full w-14 bg-Blue h-7">
          <div
            className={`w-6 h-6 bg-white rounded-full ${
              isPublic == false && "translate-x-6"
            }`}
          />
        </div>
        <p className={`${isPublic && "opacity-60"}`}>Private</p>
      </button>

      <div className="flex flex-col items-center justify-center w-full gap-2">
        <button className="w-full py-2 text-lg font-medium text-center text-white bg-blue-500 rounded-standard/4">
          Save
        </button>
        <button className="text-lg underline">Discard</button>
      </div>
    </div>
  );
};

export default SaveComponent;
