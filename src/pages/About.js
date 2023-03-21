import React from "react";
import ArticleFive from "../components/ArticleFive";
import ArticleFour from "../components/ArticleFour";
import ArticleThree from "../components/ArticleThree";

const About = () => {
  return (
    <>
      <ArticleFour />
      <ArticleFive />
      <div className="container">
        <ArticleThree />
      </div>
    </>
  );
};

export default About;
