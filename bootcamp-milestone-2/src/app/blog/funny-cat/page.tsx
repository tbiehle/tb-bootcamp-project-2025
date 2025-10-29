import React from "react";
import Image from "next/image";

export default function FunnyCat() {
  return (
    <div className="flex justify-center">
      <div className="w-1/3 h-300">
        <div className="flex flex-col items-start">
          <div className="w-2/3 self-center">
            <Image
              src={"/rigby_cat.webp"}
              alt={"A funny cat."}
              width={1000}
              height={1000}
            ></Image>
          </div>
          <h1 className="text-3xl pt-4">Funny Cat</h1>
          <h2 className="text-xl pb-4">October 13, 2025</h2>
          <p>This is a funny cat. Please have a look!</p>
        </div>
      </div>
    </div>
  );
}
