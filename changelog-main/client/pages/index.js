import React from "react";
import MainPageWrapper from "/components/MainPageWrapper";
import DashboardMainScreen from "/components/Dashboard/DashboardMainScreen";
const Home = () => {
  return (
    <MainPageWrapper screenHeader="Dashboard">
      <DashboardMainScreen />
    </MainPageWrapper>
  );
};

export default Home;
