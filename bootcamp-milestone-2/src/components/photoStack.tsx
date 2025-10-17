"use client"
import React from "react";
import PictureFrame from "./pictureFrame";
import { useState, useEffect } from "react";
import { StaticImageData } from "next/image";

export default function PhotoStack({ images }: {images: StaticImageData[]}) {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 5000);
        return () => clearInterval(id);
    }, [images.length])

    return (
        <PictureFrame src={images[idx]} alt="a rotating gallery of images of Travis doing various activities outdoors" />
    )
}