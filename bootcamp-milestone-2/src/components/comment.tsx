import React from "react";
import CommentSchema from "@/database/commentSchema";

type CommentProps = {
  comment: CommentSchema;
}

export default function Comment({ comment }: CommentProps) {
  const date = new Date(comment.date);
  return (
    <div className="bg-white w-full rounded-2xl">
      <div className="p-2 text-md">{comment.user}</div>
      <div className="p-1 pl-3 text-2xl">{comment.content}</div>
      <div className="p-2">{date.toLocaleDateString()}</div>
    </div>
  )
}