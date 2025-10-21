import React from "react";
import blogs from "../../data/blogData";
import BlogPreview from "@/components/blogPreview";

export default function Blog() {
  return (
    <div className="flex flex-col">
        <h1 className="flex text-9xl font-title text-green-800 justify-center pt-0 p-5">
          blog
        </h1>
        <div className="mb-5">
          {blogs.map((blog) => {
            return (
              <div key={blog.slug} className="flex justify-center">
                <BlogPreview {...blog} />
              </div>
            );
          })}
        </div>
    </div>
  );
}
