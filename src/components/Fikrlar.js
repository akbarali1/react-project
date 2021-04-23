import React from "react";
import { API_URL } from "./Config";

export default class Fikrlar extends React.Component {
  render() {
    return (
      <div
        className="testimonials paralax-mf bg-image"
        style={{ backgroundImage: `url(${API_URL}overlay-bg.jpg)` }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="testimonial-mf" className="owl-carousel owl-theme">
                <div className="testimonial-box">
                  <div className="author-test">
                    <img
                      src={API_URL + "testimonial-2.jpg"}
                      alt=""
                      className="rounded-circle b-shadow-a"
                    />
                    <span className="author">Xavi Alonso</span>
                  </div>
                  <div className="content-test">
                    <p className="description lead">
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                    <span className="comit">
                      <i className="fa fa-quote-right"></i>
                    </span>
                  </div>
                </div>
                <div className="testimonial-box">
                  <div className="author-test">
                    <img
                      src={API_URL + "testimonial-4.jpg"}
                      alt=""
                      className="rounded-circle b-shadow-a"
                    />
                    <span className="author">Marta Socrate</span>
                  </div>
                  <div className="content-test">
                    <p className="description lead">
                      Curabitur arcu erat, accumsan id imperdiet et, porttitor
                      at sem. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                    <span className="comit">
                      <i className="fa fa-quote-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
