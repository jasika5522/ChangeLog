import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useGlobalAuthContext } from "./AuthContext";

const NewContext = React.createContext();

const NewProvider = ({ children }) => {
  const { user, getCookie } = useGlobalAuthContext();

  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState();
  const [version, setVersion] = useState("");
  const [type, setType] = useState("FEATURE");
  const [isPublic, setIsPublic] = useState(false);
  const [feedbackFlag, setFeedbackFlag] = useState(true);
  const [featureImage, setFeatureImage] = useState("");
  const [socialImage, setSocialImage] = useState("");
  const [quill, setQuill] = useState(null);
  const [isPostUploading, setIsPostUploading] = useState(false);

  const router = useRouter();

  const createPost = async () => {
    if (user) {
      const data = {
        title,
        body: JSON.stringify(body),
        version,
        type,
        isPublic,
        feedbackFlag,
        featureImage,
        socialImage,
        productId: user?.products[user?.currentProduct]?.id,
      };

      console.log(data);
      const config = {
        headers: {
          authorization: getCookie("access-token"),
        },
      };
      try {
        setIsPostUploading(true);
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/update`,
          data,
          config
        );
        console.log(res);
        console.log("Update Created");
        router.push(`/${user.products[user?.currentProduct]?.domainName}`);
      } catch (err) {
        console.log("Error while posting", err);
      } finally {
        setIsPostUploading(false);
      }
    } else {
      console.log("NO USER FOUND BRO");
    }
  };

  return (
    <NewContext.Provider
      value={{
        isLoading,
        setIsLoading,
        title,
        setTitle,
        body,
        setBody,
        version,
        setVersion,
        type,
        setType,
        isPublic,
        setIsPublic,
        feedbackFlag,
        setFeedbackFlag,
        featureImage,
        setFeatureImage,
        socialImage,
        setSocialImage,
        quill,
        setQuill,
        createPost,
        isPostUploading,
        setIsPostUploading,
      }}
    >
      {children}
    </NewContext.Provider>
  );
};

export const useGlobalNewContext = () => {
  return useContext(NewContext);
};

export { NewContext, NewProvider };
