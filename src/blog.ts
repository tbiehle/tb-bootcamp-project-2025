type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string; // URL name used to redirect to different page
};

const blogs: Blog[] = [
  {
    title: "funny cat",
    date: "10-09-2025",
    description: "click for a surpise...",
    image: "rigby_cat.webp",
    imageAlt: "Funny cat from the internet named rigby. He has his tongue out and is making a funny face",
    slug: "funny-cat",
  },
  {
    title: "blog post 2",
    date: "10-09-2025",
    description: "now things are really rolling, making lots of blog posts",
    image: "",
    imageAlt: "",
    slug: "blog-post-2", // URL name used to redirect to different page
  },
];

const blogContainer = document.getElementById("blog-container");
blogs.forEach((blog) => {
  const new_post = document.createElement("div");
  new_post.className = "blog-thumbnail"

  // create blog header element
  const titleEl = document.createElement("h2");
  titleEl.classList.add("blog-thumbnail-title")

  const linkEl = document.createElement("a"); // <a> to be nested inside the header
  linkEl.href = `blog/${blog.slug}.html`
  linkEl.textContent = blog.title;

  titleEl.appendChild(linkEl);
  new_post.appendChild(titleEl);

  // create description element
  const descEl = document.createElement("p");
  descEl.textContent = blog.description;
  new_post.appendChild(descEl);

  // if there is an image url create an img element
  if (blog.image) {
    const img = document.createElement("img");
    img.src = blog.image;
    img.alt = blog.imageAlt || blog.title;
    new_post.appendChild(img);
  }

  if (blogContainer) blogContainer.appendChild(new_post); // append to blog container div if it exists
});
