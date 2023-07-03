import React, { useState } from "react";
import MainPageWrapper from "/components/MainPageWrapper";
import MainNewScreen from "../components/New/MainNewScreen";

const New = () => {
  return (
    <MainPageWrapper screenHeader="Create Changelog">
      <MainNewScreen />
    </MainPageWrapper>
  );
};

export default New;
