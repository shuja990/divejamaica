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
    <>
      <VideoHero />
      {/* <ArticleOne /> */}
      <ArticleTwo />
      <ArticleThree />
      {/* <ArticleFour /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <ArticleFive />
        <WeatherWidget />
      </div>
    </>
  );
};

export default Home;
