import React from "react";
import blogs from "../blogData";
import BlogPreview from "@/components/blogPreview";

export default function Blog() {
  return (
    <div>
      <h1 className="flex 
      text-5xl font-title font-bold text-emerald-800
      justify-center ">Blog</h1>
      <div>
        {blogs.map((blog) => {
          return (
            <div key={blog.slug} className="flex justify-center">
                <BlogPreview {...blog}/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
