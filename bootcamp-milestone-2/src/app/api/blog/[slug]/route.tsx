import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import { CommentType } from "@/database/commentSchema";
import Blog from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = await params;

  try {
    const blog = await Blog.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    return NextResponse.json(`blog not found (error message: ${err})`, {
      status: 404,
    });
  }
}

export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();

  try {
    const { slug } = await params;
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
