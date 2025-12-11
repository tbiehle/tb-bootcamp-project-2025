import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import { CommentType } from "@/database/commentSchema";
import Blog from "@/database/blogSchema";

interface RouteContext {
  params: {
    slug: string;
  };
}

export async function GET(req: NextRequest, context: RouteContext) {
  await connectDB();
  const { slug } = context.params;

  try {
    const blog = await Blog.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json(`blog not found (error message: ${err})`, {
      status: 404,
    });
  }
}

export async function POST(req: NextRequest, context: RouteContext) {
  await connectDB();

  try {
    const { slug } = context.params;
    const { user, content } = await req.json();
    const blog = await Blog.findOne({ slug }).orFail();

    const newComment: CommentType = {
      user,
      content,
      date: new Date(),
    };

    if (!blog.comments) {
      blog.comments = [];
    }

    blog.comments.push(newComment);
    await blog.save();

    return NextResponse.json(newComment, { status: 201 });
  } catch (err) {
    return NextResponse.json(`failed to add comment (error message: ${err})`, {
      status: 500,
    });
  }
}
