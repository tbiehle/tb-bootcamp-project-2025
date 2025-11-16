import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
type Comment = {
  user: string;
  content: string; // text content of comment
  date: Date;
};

// mongoose schema
const blogSchema = new Schema<Comment>({
  user: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
});

// defining the collection and model
const Comment = mongoose.models["comments"] || mongoose.model("comments", blogSchema);

export default Comment;
