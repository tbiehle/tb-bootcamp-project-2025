var blogs = [
    {
        title: "my awesome blog post",
        date: "10-09-2025",
        description: "this is the first blog post of many awesome blog posts",
        image: "",
        imageAlt: "",
        slug: "my-awesome-blog-post",
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
console.log("here");
blogs.forEach(function (blog) {
    var new_post = document.createElement("div");
    // create h1 element
    var titleEl = document.createElement("h1");
    titleEl.textContent = blog.title;
    new_post.appendChild(titleEl);
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
