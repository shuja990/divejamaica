import React from "react";
import ArticleFive from "../components/ArticleFive";
import ArticleFour from "../components/ArticleFour";
import ArticleThree from "../components/ArticleThree";
import ArticleOne from "../components/ArticleOne";
import WeatherWidget from "../components/ArticleSix";
import ArticleTwo from "../components/ArticleTwo";
import VideoHero from "../components/VideoHero";

const Home = () => {
  return (
    <div className="">
      <VideoHero />
      {/* <ArticleOne /> */}
      {/* <ArticleTwo /> */}
      {/* <ArticleFour /> */}
      <div className="container">
        <WeatherWidget />
        <ArticleThree />
      </div>
    </div>
  );
};

export default Home;
