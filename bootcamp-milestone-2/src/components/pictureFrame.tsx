import React from "react";
import Image, { StaticImageData } from "next/image";

interface customImageProps {
  src: StaticImageData;
  alt: string;
}

export default function PictureFrame(props: customImageProps) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.src.width}
      height={props.src.height}
      quality={100}
      className="object-contain line-white border-8 shadow-xl/30 aspect-[4/3]"
    ></Image>
  );
}
