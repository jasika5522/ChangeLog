import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useGlobalNewContext } from "/context/NewContext";
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

export default function TextEditor() {
  const { quill, setQuill, setBody } = useGlobalNewContext();

  useEffect(() => {
    if (quill == null) return;
    const handler = (delta, oldDelta, source) => {
      console.log(quill.getContents());
      setBody(quill.getContents());
    };
    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  }, [quill, setBody]);

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
