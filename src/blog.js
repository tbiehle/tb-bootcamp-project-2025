var blogs = [
    {
        title: "funny cat",
        date: "10-09-2025",
        description: "click for a surpise...",
        image: "",
        imageAlt: "",
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
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (blog) {
    var new_post = document.createElement("div");
    new_post.className = "blog-thumbnail";
    // create blog header element
    var titleEl = document.createElement("h2");
    titleEl.classList.add("blog-thumbnail-title");
    var linkEl = document.createElement("a"); // <a> to be nested inside the header
    linkEl.href = "blog/".concat(blog.slug, ".html");
    linkEl.textContent = blog.title;
    titleEl.appendChild(linkEl);
    new_post.appendChild(titleEl);
    // create description element
    var descEl = document.createElement("p");
    descEl.textContent = blog.description;
    new_post.appendChild(descEl);
    // if there is an image url create an img element
    if (blog.image) {
        var img = document.createElement("img");
        img.src = blog.image;
        img.alt = blog.imageAlt || blog.title;
        new_post.appendChild(img);
    }
    if (blogContainer)
        blogContainer.appendChild(new_post); // append to blog container div if it exists
});
