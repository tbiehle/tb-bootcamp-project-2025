import React from "react";
import blogs from "../blogData";
import styles from "./page.module.css";

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <div>
        {blogs.map((blog) => {
          return (
            <div key={blog.slug}>
              <h1 className="text-amber-950">{blog.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
