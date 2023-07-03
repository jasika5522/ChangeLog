import React from "react";
import { useGlobalAuthContext } from "/context/AuthContext";

const DashboardTopSection = () => {
  const { user } = useGlobalAuthContext();
  return (
    <div className="flex justify-center w-full gap-4">
      <div className="flex items-center justify-around w-full p-4 border-[1px] border-gray-200 rounded-standard/2 shadow-lg shadow-slate-100 basis-2/3">
        <div className="flex flex-col items-start justify-start">
          <p className="text-2xl font-semibold text-black">
            {user?.products?.length}
          </p>
          <p className="text-gray-500 opacity-90">Total Products</p>
        </div>
        {/* <div className="flex flex-col items-start justify-start">
          <p className="text-2xl font-semibold text-black">3</p>
          <p className="text-gray-500 opacity-90">Total Changelogs</p>
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="text-2xl font-semibold text-black">3</p>
          <p className="text-gray-500 opacity-90">Total Changelogs</p>
        </div> */}
        <div className="flex flex-col items-start justify-start">
          <p className="text-2xl font-semibold text-black">3</p>
          <p className="text-gray-500 opacity-90">Total Changelogs</p>
        </div>
      </div>
      <div className="flex gap-4 flex-col items-start justify-start w-full p-4 border-[1px] border-gray-200 rounded-standard/2 shadow-lg shadow-slate-100 basis-1/3">
        <div className="flex items-center justify-between w-full ">
          <p>Growth</p>
          <input type="date" className="p-1 bg-gray-200 rounded-standard/4" />
        </div>
        <div className="w-full">
          <p className="text-sm opacity-80">
            Post 3 more changelogs to unlock this section
          </p>
          <div className="w-full bg-gray-200 py- rounded-standard/4 ">
            <div
              className="bg-Primary p-0.5 text-center rounded-standard/4 py-1 text-xs font-medium leading-none text-white"
              style={{ width: "25%" }}
            >
              25%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTopSection;
