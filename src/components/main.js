import React from "react";
import "./css/main.css";

const Main = ({ news }) => {
  if (!news) {
    return <h1 className="message"> Loading...</h1>;
  }
  return (
    <div>
      <img className="image" src={news.urlToImage} alt={news.description} />
      <h2 className="title">{news.title}</h2>
      <p className="para">{news.content}</p>
    </div>
  );
};

export default Main;
