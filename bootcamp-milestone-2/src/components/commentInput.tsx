"use client";

import React from "react";
import { useState } from "react";

type CommentInputProps = {
  slug: string;
};

export default function CommentInput({ slug }: CommentInputProps) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const res = await fetch(`/api/blog/${slug}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: name,
          content: comment,
          date: new Date(),
        }),
      });

      if (!res.ok) {
        const errorBody = await res.text();
        console.error("Server error:", res.status, errorBody);
        throw new Error("Failed to submit comment.");
      }

      // Clear the form after successful submission
      setName("");
      setComment("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex flex-col bg-white rounded-2xl p-4 w-full my-4">
      <h2 className="text-3xl mb-2">Leave a Comment</h2>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-md p-2 mb-4 text-2xl"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <textarea
          placeholder="Your Comment"
          className="border border-gray-300 rounded-md p-2 mb-4 text-2xl h-32 resize-none"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
        ></textarea>
        <button
          type="submit"
          className="bg-green-800 text-white rounded-md p-2 text-2xl hover:bg-green-950 duration-200"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
