import React from "react";
import PhotoStack from "@/components/photoStack";
import travis_pic from "@/../public/travis_whitney.jpeg";
import travis_pic2 from "@/../public/travis_tower.jpeg"
import travis3 from "@/../public/travis_liam.jpeg"
import travisclimbing from "@/../public/travis_climbing.jpeg"

const images = [travisclimbing, travis_pic, travis3];

export default function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-evenly space-x-3 my-3 py-10 mx-auto md:w-4/5">
        <div className="flex flex-col justify-center sm:w-3/4 md:w-1/2 h-1/2">
          <h1 className="text-5xl font-title text-green-800 content-center">
            Hey! I&apos;m Travis.
          </h1>
          <p className="text-2xl font-title text-left">
            I am a 3rd year Computer Science student at{" "}
            <span className="text-green-900">Cal Poly SLO</span> concentrating
            in Game Development. When I&apos;m not working on games or building
            software, I&apos;m sleeping in the woods, scaling a cliff, or
            solving a crossword.
          </p>
        </div>
        <div className="flex w-md aspect-[4/3]">
            <PhotoStack images={images}/>
        </div>
      </div>
      <div className="h-100 bg-green-950">
      
      </div>
    </div>
  );
}
