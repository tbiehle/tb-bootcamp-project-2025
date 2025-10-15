import React from "react";
import Blog from "@/types/blog";

export default function BlogPreview(blog: Blog) {
    return (
        <div>
            <h1>{blog.title}</h1>
        </div>
    )
}