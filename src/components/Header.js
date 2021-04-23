import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container">
          {/* <a className="navbar-brand js-scroll" href="#page-top">Bosh sahifa</a> */}
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link js-scroll active" to={`..#home`}>
                  Bosh sahifa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll" to={`..#about`}>
                  Men haqimda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll" to={`..#service`}>
                  Xizmatlar
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll" to={`..#work`}>
                  Loyihalarim
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll" to={`..#blog`}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll" to={`..#contact`}>
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
