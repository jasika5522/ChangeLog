import React from "react";
import MainPageWrapper from "/components/MainPageWrapper";
import ChangelogMainscreen from "/components/Changelog/ChangelogMainscreen";
import { useRouter } from "next/router";
const Changelog = () => {
  const router = useRouter();
  return (
    <MainPageWrapper
      primaryHandleClick={() => router.push("/manage/asdf")}
      screenHeader="Changelog"
      primaryText="Add New"
    >
      <ChangelogMainscreen />
    </MainPageWrapper>
  );
};

export default Changelog;
