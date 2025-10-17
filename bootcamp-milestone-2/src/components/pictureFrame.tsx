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
      className="object-contain border-white border-8 shadow-xl/30 animate-rock [--deg-from:-2deg] [--deg-to:2deg]"
    ></Image>
  );
}
