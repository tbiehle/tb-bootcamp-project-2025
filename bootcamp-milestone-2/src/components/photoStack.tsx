"use client";
import React from "react";
import PictureFrame from "./pictureFrame";
import { useState, useEffect } from "react";
import { StaticImageData } from "next/image";

export default function PhotoStack({ images }: { images: StaticImageData[] }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  });

  //   return (
  //     <PictureFrame
  //       src={images[idx]}
  //       alt="a rotating gallery of images of Travis doing various activities outdoors"
  //     />
  //   );

  return (
    <div className="relative w-full h-full overflow-hidden shadow-2xl animate-rock"> 
      {images.map((img, i) => (
        <div
          key={i}
          className={`flex items-center justify-center absolute transition-opacity duration-700 ease-in-out
                      ${i === idx ? "opacity-100" : "opacity-0"}`}
        >
        <div className="relative w-full h-full">
          <PictureFrame
            key={i}
            src={img}
            alt="a rotating gallery of images of Travis doing various activites outdoors"
          ></PictureFrame>
        </div>
        </div>
      ))}
    </div>
  );
}
