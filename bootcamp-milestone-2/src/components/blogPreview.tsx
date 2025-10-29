import React from "react";
import Blog from "@/types/blog";
import Link from "next/link";
import Image from "next/image";

export default function BlogPreview(blog: Blog) {
  return (
    <div className="flex flex-col w-4/5 md:w-1/2 outline-1 hover:outline-2 outline-green-800 rounded-xl p-2 my-2 mx-4">
      <Link href={`/blog/${blog.slug}`} className="flex justify-between m-2 w-auto px-3 py-2">
        <div className="flex flex-col justify-between">
          <div> 
          {/* title and description */}
            <div className="text-4xl font-title">
              {blog.title.toLowerCase()}
            </div>
            <div>{blog.description}</div>
          </div>
          {/* date */}
          <div className="text-sm">{blog.date}</div>
        </div>
        <Image
          alt={blog.imageAlt}
          src={blog.image}
          width={100}
          height={100}
          className= "w-1/3 aspect-square object-cover rounded-2xl"
        ></Image>
      </Link>
    </div>
  );
}
