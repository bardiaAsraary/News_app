import React from "react";
import Award from "./Award";
import "animate.css";

export default function Banner({ video }) {
  return (
    <div className="banner-section">
      <video
        src={video}
        loop
        muted
        autoPlay
        typeof="video/mp4"
        id="banner-video"
      ></video>
      <div className="banner-text">
        <Award />
        <h1 id="banner-slogan1">Don't You</h1>
        <h1 id="banner-slogan2">Want To</h1>
        <h1 id="banner-slogan3">Know The News?</h1>
        <p id="banner-lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          placeat dignissimos iste nihil amet repellat maiores, dicta dolorum
          corrupti cumque, magni fugit facere aspernatur minus, illo laboriosam
          sequi deserunt quam. sLorem ipsum dolor sit amet consectetur
          adipisicing elit. Recusandae placeat dignissimos iste nihil amet
          repellat maiores, dicta dolorum corrupti cumque, magni fugit facere
          aspernatur minus, illo laboriosam sequi deserunt quam.
        </p>
      </div>
    </div>
  );
}
