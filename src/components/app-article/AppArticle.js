import React from "react";
import ArticleWrapper from "./AppArticle.style";

const AppArticle = ({ article }) => {
  return (
    <ArticleWrapper>
      <a href="#home" className="title">
        {article.title}
      </a>
      <p className="text">{article.text}</p>
    </ArticleWrapper>
  );
};

export default AppArticle;
