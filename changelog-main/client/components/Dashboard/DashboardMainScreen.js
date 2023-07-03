import React from "react";
import DashboardTopSection from "./DashboardTopSection";
import RecentPosts from "./RecentPosts";

const DashboardMainScreen = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-20">
      <DashboardTopSection />
      <RecentPosts />
    </div>
  );
};

export default DashboardMainScreen;
