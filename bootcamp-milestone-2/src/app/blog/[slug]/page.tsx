import React from "react";
import BlogClient from "./blogClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function BlogPage(props: PageProps) {
  const resolvedParams = React.use(props.params);
  const { slug } = resolvedParams;

  return <BlogClient slug={slug} />;
}