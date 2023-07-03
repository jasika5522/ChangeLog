import React, { useState } from "react";
import MainPageWrapper from "/components/MainPageWrapper";
import MainManageScreen from "/components/Manage/MainManageScreen";

const EditPost = () => {
  return (
    <MainPageWrapper screenHeader="Edit Post">
      <MainManageScreen />
    </MainPageWrapper>
  );
};

export default EditPost;
