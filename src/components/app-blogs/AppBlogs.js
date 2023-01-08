import React from "react";
import AppBlog from "../app-blog/AppBlog";
import SectionWrapper from "./AppBlogs.style";

const AppBlogs = () => {
  const blogs = [
    {
      id: 0,
      img: "images/image-retro-pcs.jpg",
      title: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades?",
    },
    {
      id: 1,
      img: "images/image-top-laptops.jpg",
      title: "Top 10 Laptops of 2022",
      text: "Our best picks for various needs and budgets.",
    },
    {
      id: 2,
      img: "images/image-gaming-growth.jpg",
      title: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
    },
  ];

  const renderedBlogs = blogs.map((blog, index) => (
    <AppBlog key={blog.id} number={index + 1} blog={blog} />
  ));
  return (
    <SectionWrapper className="d-lg-flex justify-content-between">
      {renderedBlogs}
    </SectionWrapper>
  );
};

export default AppBlogs;
