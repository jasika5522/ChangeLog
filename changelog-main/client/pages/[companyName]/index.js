import React, { useEffect } from "react";
import MainPage from "/components/CompanyPage/MainPage";
import { useRouter } from "next/router";
import { useGlobalPublicPageContext } from "/context/PublicPageContext";
import { useGlobalAuthContext } from "/context/AuthContext";
const CompanyPublicPage = () => {
  const { user } = useGlobalAuthContext();
  const { currentProduct, setCurrentProduct } = useGlobalPublicPageContext();
  const router = useRouter();

  useEffect(() => {
    setCurrentProduct(router?.query?.companyName);
  }, [router, user]);

  return (
    <div className="flex flex-col items-center justify-start w-screen h-screen">
      <div className="w-full max-w-[1200px] flex flex-col items-center justify-start">
        {/* <p>What</p> */}
        <MainPage />
      </div>
    </div>
  );
};

export default CompanyPublicPage;
