import mongoose, { Schema } from "mongoose";

type Project = {
  title: string;
  slug: string;
  description: string; // for preview
  content: string; // text content for individual blog page
  image: string; // url for string in public
  image_alt: string; // alt for image
  link: string;
}

const projectSchema =new Schema<Project>({
  title: { type: String, required: true},
  slug: { type: String, required: true},
  description: { type: String, required: true},
  content: { type: String, required: true},
  image: { type: String, required: true},
  image_alt: { type: String, required: true},
  link: {type: String, required: false},
})

const Project = mongoose.models["projects"] || mongoose.model("projects", projectSchema);
export default Project;