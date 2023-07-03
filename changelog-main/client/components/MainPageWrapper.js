import React, { useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import PrimaryButton from "./UI/Button/PrimaryButton";
import Header from "./Header/Header";

const MainPageWrapper = ({
  children,
  screenHeader = "Header",
  backLink = "",
  backText = "",
  primaryText = "",
  primaryHandleClick,
  primaryIsLoading,
  primaryDisabled,
  headerItem,
}) => {
  return (
    <div
      className={`justify-start relative w-full flex pt-[90px] pb-[8px]  pl-[280px] pr-[30px] h-full items-start flex-col bg-bgWhiteSec min-h-screen gap-1 text-Black dark:bg-dBlack dark:text-White`}
    >
      <Header />
      <div className="flex items-center justify-between w-full ">
        <div className="flex flex-col items-start justify-start gap-1">
          {backLink && backText && (
            <Link href={backLink} className="flex items-center ">
              <p className="flex items-center gap-2 font-bold cursor-pointer text-Blue group">
                <span className="transition-all duration-200 group-hover:-translate-x-1">
                  <BiChevronLeft />
                </span>
                {backText}
              </p>
            </Link>
          )}
          <p className="flex items-center justify-center gap-1 text-2xl font-bold">
            {" "}
            <span className="text-base"> pages /</span>
            {screenHeader}
          </p>
        </div>
        <div className="mt-5 scale-90">
          {primaryText && (
            <PrimaryButton
              text={primaryText}
              handleClick={primaryHandleClick}
              isLoading={primaryIsLoading}
              disabled={primaryDisabled}
              width="fit"
            />
          )}
        </div>
        {headerItem}
      </div>

      <div className="w-full h-full ">{children}</div>
    </div>
  );
};

export default MainPageWrapper;
