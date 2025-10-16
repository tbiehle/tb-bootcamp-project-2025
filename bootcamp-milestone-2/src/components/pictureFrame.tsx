import React from "react";
import Image from "next/image";

interface customImageProps {
  src: string;
  alt: string;
}

export default function PictureFrame(props: customImageProps) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={10000}
      height={10000}
      quality={100}
      className="
      border-white border-8 shadow-xl 
      animate-rock [--deg-from:5deg] [--deg-to:7deg]
      "
    ></Image>
  );
}
