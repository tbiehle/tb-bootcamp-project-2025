import React from "react";
import Image from "next/image";
import PictureFrame from "@/components/pictureFrame";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly space-x-3 mx-auto w-4/5">
      <div className="flex flex-col justify-center mr-3">
        <h1 className="text-5xl font-title text-green-800 content-center">
          {/* hi! i&apos;m Travis. */}
          lorem ipsum
        </h1>
        <p className="text-2xl font-title text-left">lorem ipsum dolor</p>
      </div>
      <div className="flex w-1/3 justify-center">
        <PictureFrame
          src={"/travis.jpeg"}
          alt={"A picture of Travis Biehle on top of Mt. Whitney, California."}
        ></PictureFrame>
      </div>
    </div>
  );
}
