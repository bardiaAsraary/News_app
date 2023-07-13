import React from "react";
import { CiUser } from "react-icons/ci";
import { CiBookmarkMinus } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoTwitch,
} from "react-icons/io";

export default function Footer({ logo, contact }) {
  const sources = ["CNN", "ESPN", "MBC", "BBC NEWS", "FOX NEWS"];
  const categories = ["Sports", "Business", "Travel", "General", "Crime"];
  const contactUs = [
    "Email: bardiya.asraary@gmail.com",
    "+989196582654",
    "+9855362659",
    "General",
  ];
  const trending = ["Tiktok", "Amazon", "Biden", "Ukraine"];
  const bottomline = [
    "Terms of service",
    "Privacy policy",
    "© BaridaNews 2023",
  ];
  return (
    <div className="footer">
      <div className="footer-text">
        <img src={logo} alt="logo" id="footer-logo" />
        <p id="footer-slogan">Number one in News all around the wourld</p>
        <p>
          Nulla officia in nisi incididunt Lorem nisi consequat anim anim qui
          ea. Adipisicing sint deserunt aliquip sunt adipisicing laborum
          adipisicing cupidatat. Mollit eiusmod in non adipisicing. Laboris
          occaecat sit esse duis. Excepteur aliqua aute amet minim in ad veniam
          labore ad aliqua.
        </p>
      </div>
      <br />
      <div className="footer-items">
        <div>
          <h4>
            <CiUser />
            &nbsp; Contact Us
          </h4>
          {contactUs.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <div>
          <h4>
            <CiHeart />
            &nbsp;Trending Today
          </h4>
          {trending.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <div>
          <h4>
            <CiBookmarkMinus />
            &nbsp;Sources
          </h4>
          {sources.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <div>
          <h4>
            <CiBookmarkMinus />
            &nbsp; Categories
          </h4>
          {categories.map((item) => (
            <p>{item}</p>
          ))}
        </div>
      </div>
      <div className="footer-bottomline">
        <div className="footer-bottomline-text">
          {bottomline.map((item) => (
            <span> &nbsp;&nbsp;{item} &nbsp;&nbsp;| </span>
          ))}
        </div>
        <div className="footer-bottomline-icons">
          <IoLogoInstagram style={{ color: "#E1306C" }} />
          <IoLogoTwitter style={{ color: "#1c9cea" }} />
          <IoLogoYoutube style={{ color: "#ff1f1f" }} />
          <IoLogoFacebook style={{ color: "#395693" }} />
          <IoLogoTwitch style={{ color: "#613fa0" }} />
        </div>
      </div>
    </div>
  );
}
