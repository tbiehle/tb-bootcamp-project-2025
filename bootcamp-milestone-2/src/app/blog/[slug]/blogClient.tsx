"use client"

import React from "react";
import Image from "next/image";
import { BlogType } from "@/database/blogSchema";
import Comment from "@/components/comment";
import CommentInput from "@/components/commentInput";
import { CommentType } from "@/database/commentSchema";
import { useState, useEffect } from "react";

type BlogClientProps = {
  slug: string;
};

async function getBlog(slug: string) {
  try {
    // fetches blog from API endpoint
    const res = await fetch(`/api/blog/${slug}`, {
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

export default function BlogClient({ slug }: BlogClientProps) {
  const [blog, setBlog] = useState<BlogType | null>(null);

  useEffect(() => {
    async function fetchBlog() {
      const fetchedBlog = await getBlog(slug);
      setBlog(fetchedBlog);
    }
    fetchBlog();
  }, [slug]);

  if (blog)
    return (
      <div className="flex flex-col items-center">
        <div className="w-1/3">
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
            <h2 className="text-xl pb-4">{new Date(blog.date).toLocaleDateString()}</h2>
            <p>{blog.content}</p>

            <h1 className="text-4xl pt-20 h-fit pb-3">comments</h1>
            <CommentInput slug={slug} />
            {Array.isArray(blog.comments) &&
              blog.comments.map((comment: CommentType, index: number) => (
                <Comment key={index} comment={comment} />
              ))}
          </div>
        </div>
      </div>
    );
}
