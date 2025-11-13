import React from "react";
import Image from "next/image";
import Blog from "@/database/blogSchema";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    // fetches blog from API endpoint
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog.");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function BlogPage({ params: { slug } }: Props) {
  const blog: Blog = await getBlog(slug);
  const date = new Date(blog.date);

  return (
    <div className="flex justify-center">
      <div className="w-1/3 h-300">
        <div className="flex flex-col items-start">
          <div className="w-2/3 self-center">
            <Image
              src={blog.image}
              alt={blog.image_alt}
              width={1000}
              height={1000}
            ></Image>
          </div>
          <h1 className="text-3xl pt-4">{blog.title}</h1>
          <h2 className="text-xl pb-4">{date.toLocaleDateString()}</h2>
          <p>{blog.content}</p>
        </div>
      </div>
    </div>
  );
}
