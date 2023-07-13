import React from "react";
// import { BsDownload, BsFillShareFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar({ logo }) {
  const categories = [
    "General",
    "Politics",
    "Opinion",
    "Science",
    "Health",
    "Sports",
    "Arts",
    "Books",
    "Style",
    "Food",
    "Travel",
    "Business",
  ];

  function toggleNav() {
    document.querySelector(".header-nav-ul").classList.toggle("block");
  }
  // {
  //   window.onresize(() =>
  //     window.innerWidth > 1400
  //       ? document.querySelector(".header-nav-ul").classList.remove("block")
  //       : ""
  //   );
  // }
  return (
    <div className="header-navbar">
      <img src={logo} alt="LOGO" id="navbar-logo" />
      <nav className="header-nav">
        <ul className="header-nav-ul">
          <li>Home</li>
          <li>Sources</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <GiHamburgerMenu
          className="header-nav-burger"
          onClick={() => toggleNav()}
        />
      </nav>
      <div className="nav-buttons">
        <button className="nav-signup">Sign up</button>
        <button className="nav-signin">Signin</button>
        {/* <button className="nav-share">
          Share <BsFillShareFill />
        </button>{" "}
        <button className="nav-download">
          <BsDownload />
        </button> */}
      </div>
    </div>
  );
}
