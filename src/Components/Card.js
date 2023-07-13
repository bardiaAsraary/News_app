import React from "react";

export default function Card({
  description,
  source,
  published_at,
  category,
  title,
  logo,
  image,
  href,
}) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-text">
          <h4 className="card-source">
            <img src={logo} alt="cnn" />
            {source}
          </h4>

          <h4 className="card-title">{title}</h4>
          <p className="card-description">{description}</p>
        </div>

        {/* <div className="card-img">
          <img src={image} alt="card image" className="card-image" />
        </div> */}
      </div>
      <div className="card-footer">
        <div>
          {" "}
          <h6 className="card-author">
            Author : {source ? source : "Unknown"}
          </h6>
          <h6 className="card-date">
            Published at : {published_at.slice(0, 10)}
          </h6>
          <h6 className="card-category">Category : {category}</h6>
        </div>{" "}
        <a target="_blank" href={href}>
          <button className="card-button">Go To Website</button>
        </a>
      </div>{" "}
    </div>
  );
}
