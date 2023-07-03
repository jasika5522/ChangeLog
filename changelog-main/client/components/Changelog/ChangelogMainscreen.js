import React from "react";
import changelogimageplaceholdersmall from "../../public/changelog-image-placeholder-small.jpg";
import Image from "next/image";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineExpandAlt } from "react-icons/ai";
const ChangelogMainscreen = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-4">
      {[1, 2, 3].map((item) => {
        return (
          <div
            key={item}
            className="flex items-start justify-between w-full bg-gray-100/70"
          >
            <div className="flex items-start">
              <Image
                width={170}
                src={changelogimageplaceholdersmall}
                alt="changelogimageplaceholdersmall"
              />
              <div className="flex flex-col items-start p-2">
                <p className="font-medium text-black/90">
                  This is a random changelog
                </p>
                <p className="text-sm opacity-70">2nd April 2023</p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between h-full gap-6 p-2">
              <div className="flex items-start justify-center gap-4 p-2">
                <button className="px-4 py-2 text-xs font-medium transition-all duration-300 group text-center min-w-[120px] ring-Primary/30 ring-1 text-Primary rounded-standard/4">
                  <p className="group-hover:hidden">Saved As Draft</p>
                  <p className="hidden group-hover:block">Publish?</p>
                </button>
                <button className="flex items-center justify-center gap-2 px-2 py-2 text-sm font-medium underline group bg-Primary/10 rounded-standard/4">
                  <AiOutlineExpandAlt className="text-xl transition-all duration-200 group-hover:scale-125" />
                  Expand
                </button>
                <button className="flex flex-col items-center justify-center gap-1 pt-2 cursor-move">
                  <div className="w-5 h-[3px] bg-gray-500 rounded-full"></div>
                  <div className="w-5 h-[3px] bg-gray-500 rounded-full"></div>
                </button>
              </div>

              <div>
                <p className="text-sm font-semibold text-green-600">v2.0</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChangelogMainscreen;
