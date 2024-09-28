"use client";

import Image from "next/image";
import React from "react";

const ImageTest = ({ url }: { url: string }) => {
  return (
    <div key={url} className="flex justify-center items-center w-[100%] max-w-[1920px] h-[850px] mx-auto">
      {/* <Image className="test" src={url} layout={"fill"} alt={""} /> */}
      <img className="test" src={url} />
      {/* <Image key={url} src={url} width={200} height={100} alt={""} /> */}
      <style jsx>{`
        /* .test {
          position: relative !important;
        } */
      `}</style>
    </div>
  );
};

export default ImageTest;
