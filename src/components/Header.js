import React from 'react';

class Header extends React.Component {
    render() {
       return (
        <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
        <div className="container">
          {/* <a className="navbar-brand js-scroll" href="#page-top">Bosh sahifa</a> */}
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
            aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">Bosh sahifa</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">Men haqimda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#service">Xizmatlar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#work">Loyihalarim</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">Aloqa</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       )
    }
}

export default Header;