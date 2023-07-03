import React from "react";
import SaveComponent from "./LeftPane/SaveComponent";
import BodyComponent from "./RightPane/BodyComponent";
import CoverImage from "./LeftPane/CoverImage";

const MainManageScreen = () => {
  return (
    <div className="flex items-start justify-center w-full h-full gap-8 pt-4">
      {/* left col */}
      <div className="flex flex-col items-start justify-start w-full gap-4 basis-1/4 ">
        <SaveComponent />
        <CoverImage />
        {/* <CoverImage /> */}
      </div>

      {/* Right Col */}
      <div className="flex flex-col items-start justify-start w-full basis-3/4">
        <BodyComponent />
      </div>
    </div>
  );
};

export default MainManageScreen;
