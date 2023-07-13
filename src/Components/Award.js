import React from "react";
import img from "../img/award1.png";
import img2 from "../img/award4.webp";

export default function Award() {
  return (
    <div className="header-award">
      {" "}
      <img src={img2} alt="award" id="award2" />
      <img src={img} alt="award" id="award" />
    </div>
  );
}
