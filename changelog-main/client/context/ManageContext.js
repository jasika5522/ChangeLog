import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ManageContext = React.createContext();

const ManageProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [version, setVersion] = useState("");
  const [type, setType] = useState("FEATURE");
  const [isPublic, setIsPublic] = useState(false);
  const [feedbackFlag, setFeedbackFlag] = useState(true);
  const [featureImage, setFeatureImage] = useState("");
  const [socialImage, setSocialImage] = useState("");
  const [quill, setQuill] = useState();
  return (
    <ManageContext.Provider
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
      }}
    >
      {children}
    </ManageContext.Provider>
  );
};

export const useGlobalManageContext = () => {
  return useContext(ManageContext);
};

export { ManageContext, ManageProvider };
