import React from "react";
import { API_URL } from "./Config";

export default class Client extends React.Component {
  render() {
    return (
      <div
        className="section-counter paralax-mf bg-image"
        style={{ backgroundImage: `url(${API_URL}counters-bg.jpg)` }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-lg-4">
              <div className="counter-box">
                <div className="counter-ico">
                  <span className="ico-circle">
                    <i className="ion-checkmark-round"></i>
                  </span>
                </div>
                <div className="counter-num">
                  <p className="counter">17</p>
                  <span className="counter-text">TUGALLANGAN LOYIHALAR</span>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-lg-4">
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle">
                    <i className="ion-ios-calendar-outline"></i>
                  </span>
                </div>
                <div className="counter-num">
                  <p className="counter">2</p>
                  <span className="counter-text">YILLIK ISH TAJRIBA</span>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-lg-4">
              <div className="counter-box pt-4 pt-md-0">
                <div className="counter-ico">
                  <span className="ico-circle">
                    <i className="ion-ios-people"></i>
                  </span>
                </div>
                <div className="counter-num">
                  <p className="counter">10</p>
                  <span className="counter-text">MIJOZLAR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
