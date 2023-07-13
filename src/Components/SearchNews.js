import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchNews({ searchnews }) {
  const categories = [
    "Tiktok",
    "Amazon",
    "Iran",
    "Biden",
    "Ukraine",
    "Us",
    "Protest",
    "Prosecuter",
    "Game",
    "CNN",
  ];
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  function userInput(word) {
    setInput(word);
    const filteredCards = searchnews.filter((user) => {
      return (
        input && user && user.title && user.title.toLowerCase().includes(input)
      );
    });
    setResults(filteredCards);
  }
  console.log(searchnews);

  // function categoryClick(category) {
  //   setInput(category);
  // }

  return (
    <div className="search-news">
      {" "}
      <h1>Search For Your Favorite News or Check The Daily News</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="search-input">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search your news..."
            onChange={(e) => userInput(e.target.value)}
            value={input}
          />
        </div>
        <p className="search-status">
          {" "}
          {input
            ? `Found ${results.length} Match For Your Search`
            : "Search For Something"}
        </p>
      </form>
      <div className="categories">
        <h3 id="trending-search">Trending Searches </h3>
        {categories.map((item) => {
          return (
            <>
              <span>#{item}</span>
            </>
          );
        })}
      </div>
      <div className="search-result">
        {input.length > 0
          ? results.map((item) => (
              <div
                className="search-news-card"
                style={{
                  background: item.image
                    ? `url(${item.image})   center center /cover`
                    : `url(${"https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png"}) center center /cover`,
                }}
              >
                <div className="search-news-card-text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="search-news-card-button">
                  <a href={item.url} target="_blank">
                    <button>Read More</button>
                  </a>
                </div>
              </div>
            ))
          : searchnews.map((item) => (
              <div
                className="search-news-card"
                style={{
                  background: item.image
                    ? `url(${item.image})   center center /cover`
                    : `url(${"https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png"}) center center /cover`,
                }}
              >
                <div className="search-news-card-text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="search-news-card-button">
                  <a href={item.url} target="_blank">
                    <button>Read More</button>
                  </a>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
