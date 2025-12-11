import mongoose, { Schema } from "mongoose";
import { commentSchema, CommentType } from "./commentSchema";

// typescript type (can also be an interface)
export type BlogType = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  content: string;
  image: string;
  image_alt: string;
  comments: CommentType[];
};

// mongoose schema
const blogSchema = new Schema<BlogType>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  content: { type: String, required: true },

  comments: { type: [commentSchema], default: [] },
});


// defining the collection and model
const Blog = mongoose.models["blogs"] || mongoose.model("blogs", blogSchema);

export default Blog;
