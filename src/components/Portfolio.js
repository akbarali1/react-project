import React from "react";
import { API_URL, API_V1 } from "./Config";

export default class Portfolio extends React.Component {
  state = {
    PORTFOLIO: [],
  };
  componentDidMount() {
    fetch(API_V1 + "/portfolio/")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({ PORTFOLIO: data });
      });
  }

  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">Men qilgan ishlar</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.PORTFOLIO.map((item) => (
              <div className="col-md-4" key={item.id}>
                <div className="work-box">
                  <a href={API_URL + item.photo} data-lightbox="gallery-mf">
                    <div className="work-img">
                      <img
                        src={API_URL + item.photo}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">{item.name}</h2>
                          <div className="w-more">
                            <span className="w-ctegory">{item.type}</span> /{" "}
                            <span className="w-date">{item.time}</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
