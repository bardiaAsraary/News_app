import React from "react";
import Card from "./Card";

function Cards({ news, logo }) {
  return (
    <div className="card-container">
      {news.map((news) => (
        <Card
          title={news.title}
          description={news.description}
          source={news.source}
          published_at={news.published_at}
          category={news.category}
          logo={logo}
          image={news.image}
          key={news.url}
          href={news.url}
        />
      ))}
    </div>
  );
}

export default Cards;
