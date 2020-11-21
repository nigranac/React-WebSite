import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import NewsCard from "./components/NewsCard/NewsCard";
import { NewsContext } from "./App";
import Slider from "../src/components/Slider/Slider";
import "./news.style.css";

export const News = (news) => {
  const [newsList, setNewsList] = useState([]);

  const { selectedCategory } = useContext(NewsContext);

  //   console.log(selectedCategory);

  const fetchNewsData = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=tr&category=${selectedCategory}&apiKey=ea737c44a9754725aa0b320aced48165`
    );
    setNewsList(response?.data?.articles);
  };

  useEffect(() => {
    fetchNewsData();
  }, [selectedCategory]);

  return (
    <div className="newsContainer">
      <Slider newsList={newsList} />

      <div className="newsCard">
        {newsList?.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  );
};
