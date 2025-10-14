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
    title: "Funny cat",
    date: "10-13-2025",
    description: "A funny cat.",
    image: "rigby_cat.webp",
    imageAlt: "Funny cat from the internet named rigby. He has his tongue out and is making a funny face",
    slug: "funny-cat",
  },
  {
    title: "Funny dog",
    date: "10-09-2025",
    description: "A funny dog.",
    image: "dog.png",
    imageAlt: "a dog lying on its back with all its skin folded up and squished.",
    slug: "funny-dog", // URL name used to redirect to different page
  },
];

const blogContainer = document.getElementById("blog-container");
blogs.forEach((blog) => {
  const new_post = document.createElement("div");
  new_post.className = "blog-thumbnail";

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
    img.src = `blog/${blog.image}`;
    img.alt = blog.imageAlt || blog.title;
    img.style.width = '10em';
    new_post.appendChild(img);
  }

  if (blogContainer) blogContainer.appendChild(new_post); // append to blog container div if it exists
});
