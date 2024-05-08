"use client";

import "react-quill/dist/quill.bubble.css";

import { useMemo } from "react";
import dynamic from "next/dynamic";

interface PreviewProps {
  value: string;
}

export const Preview = ({ value }: PreviewProps) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return <ReactQuill theme="bubble" value={value} readOnly />;
};

// import { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// interface PreviewProps {
//   value: string;
// }

// export const Preview = ({ value }: PreviewProps) => {
//   return <ReactQuill theme="bubble" value={value} readOnly />;
// };
