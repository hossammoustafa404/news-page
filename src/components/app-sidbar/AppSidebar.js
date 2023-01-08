import React from "react";
import AppArticle from "../app-article/AppArticle";
import SidebarWrapper from "./AppSidebar.style";

const AppSidebar = () => {
  const newArticles = [
    {
      id: 0,
      title: "Hydrogen Vs Electric Cars",
      text: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      id: 1,
      title: "The Downsides of Al Artistry ",
      text: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      id: 2,
      title: "Is VC Funding Drying Up?",
      text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  const renderedArticles = newArticles.map((article) => (
    <AppArticle key={article.id} article={article} />
  ));

  return (
    <SidebarWrapper className="h-100">
      <h2 className="title text-capitalize">new</h2>
      <div className="articles">{renderedArticles}</div>
    </SidebarWrapper>
  );
};

export default AppSidebar;
