import React from "react";
import { API_URL } from "./Config";
import Header from "./Header";
import About from "./About";
import Servise from "./Servise";
import Portfolio from "./Portfolio";
import HomeBlog from "./HomeBlog";
import Client from "./Client";
import Aloqa from "./Aloqa";
class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div
          id="home"
          className="intro route bg-image"
          style={{
            backgroundImage: `url("${API_URL}programming-language.jpg")`,
          }}
        >
          <div className="overlay-itro"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <p className="display-6 color-d">Assalomu alaykum, men:</p>
                <h1 className="intro-title mb-4"> Akbarali</h1>
                <p className="intro-subtitle">
                  <span className="text-slider-items">
                    Web dasturchi, Backend dasturchi
                  </span>
                  <strong className="text-slider"></strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <About />
        <Servise />
        <Portfolio />
        <Client />
        <HomeBlog />
        <Aloqa />
      </>
    );
  }
}
export default Home;
