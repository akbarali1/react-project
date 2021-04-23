import React from "react";
import { API_URL, API_V1 } from "./Config";
import Header from "./Header";
import Footer from "./Footer";

export default class Blog extends React.Component {
  state = {
    Maqola: [],
  };
  componentDidMount() {
    fetch(API_V1 + "/blog/?link=" + this.props.match.params.maqola)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ Maqola: data });
      });
  }

  render() {
    if (this.state.Maqola.error !== "Bunday maqola mavjud emas") {
      return (
        <>
          <Header />
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
                  <h2 className="intro-title mb-4">{this.state.Maqola.name}</h2>
                  <ol className="breadcrumb d-flex justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/#">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/#">Maqolalar</a>
                    </li>
                    <li className="breadcrumb-item active">
                      {this.state.Maqola.name}
                    </li>
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
                    <div className="post-thumb">
                      <img
                        src={API_URL + this.state.Maqola.author_photo}
                        alt={this.state.Maqola.name}
                        className="img-fluid"
                      />
                    </div>
                    <div className="post-meta">
                      <h1 className="article-title">
                        {this.state.Maqola.name}
                      </h1>

                      <ul>
                        <li>
                          <span className="ion-ios-person"></span>
                          <a href="/#"> {this.state.Maqola.author}</a>
                        </li>
                        <li>
                          <span className="ion-pricetag"></span>
                          <a href="/#"> {this.state.Maqola.cat_name}</a>
                        </li>
                        <li>
                          <span className="ion-chatbox"></span>
                          <a href="/#"> 0</a>
                        </li>
                      </ul>
                    </div>
                    <div className="article-content">
                      <p>{this.state.Maqola.info}</p>
                    </div>
                  </div>
                  <div className="box-comments">
                    <div className="title-box-2">
                      <h4 className="title-comments title-left">
                        Comments (0)
                      </h4>
                    </div>
                    {/* <ul className="list-comments">
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
                  </ul> */}
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
                          <a href="/#">
                            Lorem ipsum dolor sit amet consectetur
                          </a>
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
            <Footer />
          </section>
        </>
      );
    } else {
      //   console.log(this.state.Maqola.error);
      return (
        <>
          <p>Bunday maqola mavjud emas</p>
        </>
      );
    }
  }
}
