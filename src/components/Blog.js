import React from "react";
import { API_URL, API_V1 } from "./Config";

export default class Blog extends React.Component {
  state = {
    Maqola: [],
  };
  componentDidMount() {
      fetch(API_V1 + "/blog/?link="+this.props.match.params.maqola)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ Maqola: data });
      });
    }
  render() {
    return (
      <>
        <nav
          className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll" href="/#home">
              Bosh sahifa
            </a>
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
                  <a className="nav-link js-scroll" href="/#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="/#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="/#">
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="/#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="/#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="intro intro-single route bg-image"
          style={{
            backgroundImage: `url(${API_URL}/overlay-bg.jpg)`,
          }}
        >
          <div className="overlay-mf"></div>
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                <h2 className="intro-title mb-4">Blog Details</h2>
                <ol className="breadcrumb d-flex justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/#">Library</a>
                  </li>
                  <li className="breadcrumb-item active">Data</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <section className="blog-wrapper sect-pt4" id="blog">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="post-box">
                  {/* <div className="post-thumb">
                    <img src="img/post-1.jpg" className="img-fluid" alt="" />
                  </div> */}
                  <div className="post-meta">
                    {this.state.Maqola.map((item) => (
                    <h1 className="article-title" key={item.id}>
                      {item.name}
                    </h1>
                        ))}
                    <ul>
                      <li>
                        <span className="ion-ios-person"></span>
                        <a href="/#">Jason London</a>
                      </li>
                      <li>
                        <span className="ion-pricetag"></span>
                        <a href="/#">Web Design</a>
                      </li>
                      <li>
                        <span className="ion-chatbox"></span>
                        <a href="/#">14</a>
                      </li>
                    </ul>
                  </div>
                  <div className="article-content">
                    <p>
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                      a. Cras ultricies ligula sed magna dictum porta. Quisque
                      velit nisi, pretium ut lacinia in, elementum id enim.
                      Praesent sapien massa, convallis a pellentesque nec,
                      egestas non nisi. Vestibulum ante ipsum primis in faucibus
                      orci luctus et ultrices posuere cubilia Curae; Donec velit
                      neque, auctor sit amet aliquam vel, ullamcorper sit amet
                      ligula. Nulla quis lorem ut libero malesuada feugiat.
                    </p>
                    <p>
                      Nulla porttitor accumsan tincidunt. Cras ultricies ligula
                      sed magna dictum porta. Mauris blandit aliquet elit, eget
                      tincidunt nibh pulvinar a. Cras ultricies ligula sed magna
                      dictum porta. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Donec sollicitudin molestie malesuada.
                    </p>
                    <p>
                      Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                      a. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Praesent sapien massa, convallis a pellentesque nec,
                      egestas non nisi. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Curabitur arcu erat, accumsan id
                      imperdiet et, porttitor at sem. Donec rutrum congue leo
                      eget malesuada.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla quis lorem ut libero malesuada feugiat. Curabitur
                      arcu erat, accumsan id imperdiet et, porttitor at sem.
                      Vivamus suscipit tortor eget felis porttitor volutpat.
                      Vivamus suscipit tortor eget felis porttitor volutpat.
                      Quisque velit nisi, pretium ut lacinia in, elementum id
                      enim.
                    </p>
                    <blockquote className="blockquote">
                      <p className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere erat a ante.
                      </p>
                    </blockquote>
                    <p>
                      Nulla porttitor accumsan tincidunt. Cras ultricies ligula
                      sed magna dictum porta. Mauris blandit aliquet elit, eget
                      tincidunt nibh pulvinar a. Cras ultricies ligula sed magna
                      dictum porta. Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Donec sollicitudin molestie malesuada.
                    </p>
                  </div>
                </div>
                <div className="box-comments">
                  <div className="title-box-2">
                    <h4 className="title-comments title-left">Comments (34)</h4>
                  </div>
                  <ul className="list-comments">
                    <li>
                      <div className="comment-avatar">
                        <img src="img/testimonial-2.jpg" alt="" />
                      </div>
                      <div className="comment-details">
                        <h4 className="comment-author">Oliver Colmenares</h4>
                        <span>18 Sep 2017</span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolores reprehenderit, provident cumque ipsam
                          temporibus maiores quae natus libero optio, at qui
                          beatae ducimus placeat debitis voluptates amet
                          corporis.
                        </p>
                        <a href="3">Reply</a>
                      </div>
                    </li>
                    <li>
                      <div className="comment-avatar">
                        <img src="img/testimonial-4.jpg" alt="" />
                      </div>
                      <div className="comment-details">
                        <h4 className="comment-author">Carmen Vegas</h4>
                        <span>18 Sep 2017</span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolores reprehenderit, provident cumque ipsam
                          temporibus maiores quae natus libero optio, at qui
                          beatae ducimus placeat debitis voluptates amet
                          corporis, veritatis deserunt.
                        </p>
                        <a href="3">Reply</a>
                      </div>
                    </li>
                    <li className="comment-children">
                      <div className="comment-avatar">
                        <img src="img/testimonial-2.jpg" alt="" />
                      </div>
                      <div className="comment-details">
                        <h4 className="comment-author">Oliver Colmenares</h4>
                        <span>18 Sep 2017</span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolores reprehenderit, provident cumque ipsam
                          temporibus maiores quae.
                        </p>
                        <a href="3">Reply</a>
                      </div>
                    </li>
                    <li>
                      <div className="comment-avatar">
                        <img src="img/testimonial-2.jpg" alt="" />
                      </div>
                      <div className="comment-details">
                        <h4 className="comment-author">Oliver Colmenares</h4>
                        <span>18 Sep 2017</span>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dolores reprehenderit, provident cumque ipsam
                          temporibus maiores quae natus libero optio.
                        </p>
                        <a href="3">Reply</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="form-comments">
                  <div className="title-box-2">
                    <h3 className="title-left">Leave a Reply</h3>
                  </div>
                  <form className="form-mf">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control input-mf"
                            id="inputName"
                            placeholder="Name *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control input-mf"
                            id="inputEmail1"
                            placeholder="Email *"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <input
                            type="url"
                            className="form-control input-mf"
                            id="inputUrl"
                            placeholder="Website"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 mb-3">
                        <div className="form-group">
                          <textarea
                            id="textMessage"
                            className="form-control input-mf"
                            placeholder="Comment *"
                            name="message"
                            cols="45"
                            rows="8"
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="button button-a button-big button-rouded"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <div className="widget-sidebar sidebar-search">
                  <h5 className="sidebar-title">Search</h5>
                  <div className="sidebar-content">
                    <form>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search for..."
                          aria-label="Search for..."
                        />
                        <span className="input-group-btn">
                          <button
                            className="btn btn-secondary btn-search"
                            type="button"
                          >
                            <span className="ion-android-search"></span>
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="widget-sidebar">
                  <h5 className="sidebar-title">Recent Post</h5>
                  <div className="sidebar-content">
                    <ul className="list-sidebar">
                      <li>
                        <a href="/#">Atque placeat maiores.</a>
                      </li>
                      <li>
                        <a href="/#">Lorem ipsum dolor sit amet consectetur</a>
                      </li>
                      <li>
                        <a href="/#">Nam quo autem exercitationem.</a>
                      </li>
                      <li>
                        <a href="/#">Atque placeat maiores nam quo autem</a>
                      </li>
                      <li>
                        <a href="/#">Nam quo autem exercitationem.</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget-sidebar">
                  <h5 className="sidebar-title">Archives</h5>
                  <div className="sidebar-content">
                    <ul className="list-sidebar">
                      <li>
                        <a href="/#">September, 2017.</a>
                      </li>
                      <li>
                        <a href="/#">April, 2017.</a>
                      </li>
                      <li>
                        <a href="/#">Nam quo autem exercitationem.</a>
                      </li>
                      <li>
                        <a href="/#">Atque placeat maiores nam quo autem</a>
                      </li>
                      <li>
                        <a href="/#">Nam quo autem exercitationem.</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget-sidebar widget-tags">
                  <h5 className="sidebar-title">Tags</h5>
                  <div className="sidebar-content">
                    <ul>
                      <li>
                        <a href="/#">Web.</a>
                      </li>
                      <li>
                        <a href="/#">Design.</a>
                      </li>
                      <li>
                        <a href="/#">Travel.</a>
                      </li>
                      <li>
                        <a href="/#">Photoshop</a>
                      </li>
                      <li>
                        <a href="/#">Corel Draw</a>
                      </li>
                      <li>
                        <a href="/#">JavaScript</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="paralax-mf footer-paralax bg-image sect-mt4 route"
          style={{
            backgroundImage: `url(${API_URL}/overlay-bg.jpg)`,
          }}
        >
          <div className="overlay-mf"></div>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="copyright-box">
                    <p className="copyright">
                      &copy; Copyright <strong>DevFolio</strong>. All Rights
                      Reserved
                    </p>
                    <div className="credits">
                      Designed by{" "}
                      <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </>
    );
  }
}
