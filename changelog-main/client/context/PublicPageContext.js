import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useGlobalAuthContext } from "./AuthContext";

const PublicPageContext = React.createContext();

const PublicPageProvider = ({ children }) => {
  const { user, getCookie } = useGlobalAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [currentProduct, setCurrentProduct] = useState("");
  const [currentProductData, setCurrentProductData] = useState();

  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    const getProductByName = async () => {
      if (user && currentProduct) {
        console.log(user);
        try {
          const config = {
            headers: {
              authorization: getCookie("access-token"),
            },
          };
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/product/public/${currentProduct}`,
            config
          );
          setCurrentProductData(res.data.data);
          console.log("Product with name", currentProduct, res.data.data);
        } catch (err) {
          console.log("ERROR IN PUBLIC PAGE", err);
        } finally {
          console.log("DONE");
        }
      }
    };
    getProductByName();
  }, [getCookie, router, user, currentProduct]);

  return (
    <PublicPageContext.Provider
      value={{
        isLoading,
        setIsLoading,
        currentProduct,
        setCurrentProduct,
        currentProductData,
        setCurrentProductData,
      }}
    >
      {children}
    </PublicPageContext.Provider>
  );
};

export const useGlobalPublicPageContext = () => {
  return useContext(PublicPageContext);
};

export { PublicPageContext, PublicPageProvider };
