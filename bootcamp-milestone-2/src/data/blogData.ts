import Blog from "@/types/blog";

const blogs: Blog[] = [
  {
    title: "Funny cat",
    date: "10-13-2025",
    description: "A funny cat.",
    image: "/rigby_cat.webp",
    imageAlt: "Funny cat from the internet named rigby. He has his tongue out and is making a funny face",
    slug: "funny-cat",
  },
  {
    title: "Funny dog",
    date: "10-09-2025",
    description: "A funny dog.",
    image: "/dog.png",
    imageAlt: "a dog lying on its back with all its skin folded up and squished.",
    slug: "funny-dog", // URL name used to redirect to different page
  },
];

export default blogs;