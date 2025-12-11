import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
export type CommentType = {
  user: string;
  content: string;
  date: Date;
};

// mongoose schema
const commentSchema = new Schema<CommentType>({
  user: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

// defining the collection and model
const CommentModel =
  mongoose.models["comments"] || mongoose.model("comments", commentSchema);

export { commentSchema, CommentModel };