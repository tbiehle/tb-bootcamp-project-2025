import React from "react";
import Image from "next/image";
import Blog from "@/database/blogSchema";
import Comment from "@/components/comment";

type Props = {
  params: Promise<{ slug: string }>;
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

export default async function BlogPage(props: Props) {
  const params = await props.params;

  const { slug } = params;

  const blog: Blog = await getBlog(slug);
  const date = new Date(blog.date);

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
            <h2 className="text-xl pb-4">{date.toLocaleDateString()}</h2>
            <p>{blog.content}</p>

            <h1 className="text-4xl pt-20 h-fit pb-3">comments</h1>
            {blog.comments &&
              blog.comments.map((comment, idx) => (
                <Comment key={idx} comment={comment}></Comment>
              ))}
          </div>
        </div>
      </div>
    );
}
