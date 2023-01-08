import React from "react";
import Card from "react-bootstrap/Card";
import BlogWrapper from "./AppBlog.style";

const AppBlog = ({ blog, number }) => {
  return (
    <BlogWrapper className="d-flex flex-row gap-3">
      <Card.Img src={blog.img} alt="Blog image" aria-hidden />
      <Card.Body>
        <span className="number">0{number}</span>

        <a href="#home" className="card-title">
          {blog.title}
        </a>

        <Card.Text>{blog.text}</Card.Text>
      </Card.Body>
    </BlogWrapper>
  );
};

export default AppBlog;
