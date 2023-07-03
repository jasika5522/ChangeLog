import React, { useState } from "react";
import Link from "next/link";
import Input from "/components/UI/Input";
import { useRouter } from "next/router";
import axios from "axios";
import { useGlobalAuthContext } from "/context/AuthContext";
const AddProduct = () => {
  const {
    setUser,
    setCookie,
    getCookie,
    login,
    setShowLoginModal,
    verifyToken,
  } = useGlobalAuthContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [domainName, setDomainName] = useState("");
  const [logo, setLogo] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const createProduct = async (e) => {
    try {
      e.preventDefault();
      const data = {
        name,
        description,
        domainName,
        logo,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: getCookie("access-token"),
        },
      };

      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/product`,
        data,
        config
      );

      console.log(res.data);
      // constx szcx res = await axios(config);
      router.push("/");
      verifyToken();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <p className="absolute font-bold left-6 top-6 ">LOGO</p>
      <form className="flex flex-col items-start justify-start w-full max-w-xl gap-8">
        <div className="flex flex-col items-start justify-start w-full gap-3">
          <p className="text-3xl font-semibold">Create your first product</p>
          <p className="opacity-70">
            You can create manage changelogs for multiple products.Lets get you
            started with your first product.
          </p>
        </div>
        <div className="flex flex-col w-full gap-4">
          <Input
            required={true}
            label="Name"
            placeholder="Enter the name for your product"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Description"
            placeholder="Enter description for your product"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            required={true}
            label="Domain Name"
            placeholder="Enter your domainname for your product"
            value={domainName}
            onChange={(e) => setDomainName(e.target.value)}
          />
          <Input
            required={true}
            label="logo"
            placeholder="Enter demo logo for your product"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
          />
          {/* <Input label="Logo" placeholder="Enter logo for your product" /> */}
        </div>
        <div className="flex flex-col w-full gap-4">
          <button
            onClick={createProduct}
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center w-full py-3 text-sm font-medium text-white uppercase bg-Blue rounded-standard/4"
          >
            {isLoading ? (
              <div
                className={`w-6 h-6 border-2 border-b-0 border-r-0 rounded-full animate-spin border-White`}
              />
            ) : (
              "Create Product"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
