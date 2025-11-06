import React from "react";
import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema";

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}

export default async function BlogComponent() {
  const blogs = await getBlogs();

  return (
    <div className="flex flex-col">
        <h1 className="flex text-9xl font-title text-green-800 justify-center pt-0 p-5">
          blog
        </h1>
        <div className="mb-5">
          {blogs && blogs.map((blog) => {
            return (
              <div key={blog.slug} className="flex justify-center">
                <BlogPreview blog={blog} />
              </div>
            );
          })}
        </div>
    </div>
  );
}
