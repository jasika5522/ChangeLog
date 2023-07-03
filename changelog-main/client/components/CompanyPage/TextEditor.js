import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useGlobalPublicPageContext } from "/context/PublicPageContext";
const TOOLBAR_OPTIONS = [];

export default function TextEditor() {
  const { quill, setQuill } = useGlobalPublicPageContext();

  useEffect(() => {
    if (quill == null) return;
    const handler = (delta, oldDelta, source) => {
      console.log(delta);
    };
    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  }, [quill]);

  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapper.innerHTML = "";
    if (typeof window !== "undefined") {
      const editor = document.createElement("div");
      wrapper.append(editor);
      const q = new Quill(editor, {
        theme: "snow",
        modules: { toolbar: TOOLBAR_OPTIONS },
      });
      setQuill(q);
    }
  }, []);

  return <div className="container text-3xl prose" ref={wrapperRef}></div>;
}
