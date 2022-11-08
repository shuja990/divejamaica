import React from "react";
import ArticleFive from "../components/ArticleFive";
import ArticleFour from "../components/ArticleFour";
import ArticleOne from "../components/ArticleOne";
import WeatherWidget from "../components/ArticleSix";
import ArticleThree from "../components/ArticleThree";
import ArticleTwo from "../components/ArticleTwo";

const Home = () => {
  return (
    <>
      <ArticleOne />
      <ArticleTwo />
      <ArticleThree />
      <ArticleFour />
      <ArticleFive />
      <WeatherWidget />
    </>
  );
};

export default Home;
