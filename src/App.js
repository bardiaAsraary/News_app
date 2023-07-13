import React, { Component } from "react";
import axios from "axios";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import logo from "./img/logo.svg";
import video from "./vid/1.mp4";
import Banner from "./Components/Banner";
import cnn from "./img/cnn.png";
import bbc from "./img/bbc.png";
import forextv from "./img/forextv.png";
import espn from "./img/espn.png";
// import Ad from "./Components/Ad";
import BodyBanner from "./Components/BodyBanner";
import globe from "./img/globe.png";
import wave from "./img/wave.gif";
import BodyBanner2 from "./Components/BodyBanner2";
import sources from "./img/sources_graphic.svg";
import ebook from "./img/ebook.gif";
import SearchNews from "./Components/SearchNews";
import Footer from "./Components/Footer";
import { CiMoneyCheck1 } from "react-icons/ci";

class App extends Component {
  render() {
    if (this.state.category) {
      axios
        .get(
          `http://api.mediastack.com/v1/news?access_key=2014f36bb780d17447dacf20e9ba3c48&categories=${this.state.category}`
        )
        .then((res) => res.data)
        .then((res) => {
          this.setState({ searchResult: res.data });
        });
    }
    return (
      <>
        {/* <Navbar logo={logo} /> */}

        <Banner video={video} />
        <div id="container">
          <SearchNews searchnews={this.state.searchnews} />
          <h1 id="daily-news">
            <CiMoneyCheck1 />
            &nbsp; Latest News
          </h1>
          <hr />
          <br />
          <Cards news={this.state.cnn} logo={cnn} />;
          <Cards news={this.state.bbc} logo={bbc} />;
          <Cards news={this.state.espn} logo={espn} />;
          <Cards news={this.state.forextv} logo={forextv} />;
        </div>
        {/* <Ad /> */}
        <div id="container">
          <BodyBanner globe={globe} wave={wave} />
          <BodyBanner2 sources={sources} ebook={ebook} />
        </div>
        <br />
        <Footer logo={logo} />
      </>
    );
  }

  state = {
    cnn: [],
    bbc: [],
    espn: [],
    forextv: [],
    searchnews: [],
    searchResult: [],
    category: "",
  };

  async componentDidMount() {
    let limit = [8, 50];
    const source = ["cnn", "bbc", "forextv", "espn"];
    for (let i = 0; i < 4; i++) {
      await axios
        .get(
          `http://api.mediastack.com/v1/news?access_key=2014f36bb780d17447dacf20e9ba3c48&sources=${source[i]}&limit=${limit[0]}`
        )
        .then((res) => res.data)
        .then((res) =>
          this.setState({ [source[i]]: res.data }, console.log(res.data))
        )
        .catch(console.log("could not get info"))
        .finally(
          await axios
            .get(
              `http://api.mediastack.com/v1/news?access_key=2014f36bb780d17447dacf20e9ba3c48&sources=cnn&limit=100`
            )
            .then((res) => res.data)
            .then((res) => this.setState({ searchnews: res.data }))
        );
    }
  }
  //   componentDidMount() {
  //     fetch(
  //       "http://api.mediastack.com/v1/news?access_key=094d098d6a651f9eccbdd19d7a8fc51c&sources=cnn&limit=50"
  //     )
  //       .then((res) => res.json())
  //       .then((res) => {
  //         this.setState({ searchnews: res.data });
  //         console.log("this is searchnews" + res.data);
  //       });
  //     fetch(
  //       "http://api.mediastack.com/v1/news?access_key=094d098d6a651f9eccbdd19d7a8fc51c&sources=cnn&limit=6"
  //     )
  //       .then((res) => res.json())
  //       .then((res) => {
  //         this.setState({ cnn: res.data });
  //         console.log(res.data);
  //       })
  //       .catch(console.log("could not fetch"));
  //     fetch(
  //       "http://api.mediastack.com/v1/news?access_key=094d098d6a651f9eccbdd19d7a8fc51c&sources=bbc&limit=6"
  //     )
  //       .then((res) => res.json())
  //       .then((res) => {
  //         this.setState({ bbc: res.data });
  //         console.log(res.data);
  //       })
  //       .catch(console.log("could not fetch"));
  //     fetch(
  //       "http://api.mediastack.com/v1/news?access_key=094d098d6a651f9eccbdd19d7a8fc51c&sources=espn&limit=6"
  //     )
  //       .then((res) => res.json())
  //       .then((res) => {
  //         this.setState({ espn: res.data });
  //         console.log(res.data);
  //       })
  //       .catch(console.log("could not fetch"));
  //     fetch(
  //       "http://api.mediastack.com/v1/news?access_key=094d098d6a651f9eccbdd19d7a8fc51c&sources=forextv&limit=6"
  //     )
  //       .then((res) => res.json())
  //       .then((res) => {
  //         this.setState({ forextv: res.data });
  //         console.log(res.data);
  //       })
  //       .catch(console.log("could not fetch"));
  //   }
}

export default App;
