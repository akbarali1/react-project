import React from "react";
import { API_URL, API_V1 } from "./Config";
import { Link } from "react-router-dom";
class Home extends React.Component {
  state = {
    PORTFOLIO: [],
    yearData: [],
    blog: [],
    languages: [],
  };
  componentDidMount() {
    fetch(API_V1 + "/year-data/")
      .then((response) => response.json())
      .then((data) => {
        //  console.log(data);
        this.setState({ yearData: data });
      });
    fetch(API_V1 + "/languages/")
      .then((languages) => languages.json())
      .then((data) => {
        // console.log(data);
        this.setState({ languages: data });
      });
    fetch(API_V1 + "/portfolio/")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({ PORTFOLIO: data });
      });
    fetch(API_V1 + "/blog-info/")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        this.setState({ blog: data });
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
                  <a className="nav-link js-scroll active" href="#home">
                    Bosh sahifa
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#about">
                    Men haqimda
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#service">
                    Xizmatlar
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#work">
                    Loyihalarim
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#contact">
                    Aloqa
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
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
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-sm-6 col-md-5">
                          <div className="about-img">
                            <img
                              src={API_URL + "code.jpg"}
                              alt=""
                              className="img-fluid rounded b-shadow-a"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-7">
                          <div className="about-info">
                            <p>
                              <span className="title-s">Ism: </span>{" "}
                              <span>Akbarali</span>
                            </p>
                            <p>
                              <span className="title-s">Soha: </span>{" "}
                              <span>Web dasturchi</span>
                            </p>
                            <p>
                              <span className="title-s">Email: </span>{" "}
                              <span>
                                <a href="mailto: akbarali@webschool.uz">
                                  akbarali@webschool.uz
                                </a>
                              </span>
                            </p>
                            <p>
                              <span className="title-s">Yosh: </span>{" "}
                              <span>22</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="skill-mf">
                        <p className="title-s">Ko'nkmalar</p>
                        {this.state.languages.map((language) => (
                          <div key={language.id}>
                            <span key={language.id}>{language.language}</span>
                            <span className="pull-right">
                              {language.percent}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: language.percent }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">Men haqimda</h5>
                        </div>
                        {this.state.yearData.map((year) => (
                          <p className="lead" key={year.id}>
                            {year.text}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="service" className="services-mf route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Men nimalar qila olaman ?</h3>
                  <p className="subtitle-a">
                    Men qilishim mumkun bo`lgan ishlar.
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="ion-monitor"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Web Design</h2>
                    <p className="s-description text-center">
                      Agarda sizda tayyor PSD bo`lsa HTML CSS JSda yasab
                      berishim mumkun. <br /> (Lekin o`zim 0 dan fantaziya qilib
                      dizayn qila olmayman).
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <i className="ion-code-working"></i>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Web backend</h2>
                    <p className="s-description text-center">
                      Sizda tayyor Frontend bo`lsa (HTML CSS JS) men YII2,
                      Johncms yoki sof phpda, kelajakda esa Laravelda Backend
                      qismini qilib berishim mumkun.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle">
                      <svg
                        style={{ marginTop: "-15px" }}
                        id="Capa_1"
                        enableBackground="new 0 0 512 512"
                        height="60"
                        width="60"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <path d="m440 279c34.738 0 63-28.262 63-63 0-29.569-20.482-54.433-48-61.181v-75.319l26-19.5c3.777-2.833 6-7.278 6-12v-33c0-8.284-6.716-15-15-15s-15 6.716-15 15v25.5l-17 12.75-17-12.75v-25.5c0-8.284-6.716-15-15-15s-15 6.716-15 15v33c0 4.722 2.223 9.167 6 12l26 19.5v75.319c-9.058 2.221-17.349 6.405-24.403 12.076-7.061-11.751-19.333-20.025-33.597-21.61v-34.285c0-61.206-49.794-111-111-111s-111 49.794-111 111v34.285c-14.264 1.584-26.536 9.858-33.597 21.61-7.053-5.671-15.344-9.854-24.403-12.076v-75.319l26-19.5c3.777-2.833 6-7.278 6-12v-33c0-8.284-6.716-15-15-15s-15 6.716-15 15v25.5l-17 12.75-17-12.75v-25.5c0-8.284-6.716-15-15-15s-15 6.716-15 15v33c0 4.722 2.223 9.167 6 12l26 19.5v75.319c-27.518 6.748-48 31.612-48 61.181 0 34.738 28.262 63 63 63 12.093 0 23.396-3.432 33-9.363v100.711c-35.875 3.528-64 33.865-64 70.652 0 39.149 31.851 71 71 71h288c39.149 0 71-31.851 71-71 0-36.787-28.125-67.124-64-70.652v-100.711c9.604 5.931 20.907 9.363 33 9.363zm0-96c18.196 0 33 14.804 33 33s-14.804 33-33 33-33-14.804-33-33 14.804-33 33-33zm-265-72c0-44.663 36.336-81 81-81s81 36.337 81 81v34h-162zm-40 79c0-8.271 6.729-15 15-15h212c8.271 0 15 6.729 15 15v180h-242zm207.089 210c-17.452 24.578-17.47 57.398 0 82h-172.178c17.452-24.578 17.47-57.398 0-82zm-270.089-151c-18.196 0-33-14.804-33-33s14.804-33 33-33 33 14.804 33 33-14.804 33-33 33zm-1 192c0-22.607 18.393-41 41-41s41 18.393 41 41-18.393 41-41 41-41-18.393-41-41zm370 0c0 22.607-18.393 41-41 41s-41-18.393-41-41 18.393-41 41-41 41 18.393 41 41z" />
                          <path d="m192 335h128c8.284 0 15-6.716 15-15v-80c0-8.284-6.716-15-15-15h-128c-8.284 0-15 6.716-15 15v80c0 8.284 6.716 15 15 15zm15-80h98v50h-98z" />
                          <circle cx="288.005" cy="96" r="15.005" />
                          <circle cx="399.995" cy="441" r="15.005" />
                          <circle cx="224.005" cy="96" r="15.005" />
                          <circle cx="112" cy="441" r="15.005" />
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Telegram BOT</h2>
                    <p className="s-description text-center">
                      Turli xildagi telegram botlarni qilib berolaman. Saytingiz
                      bo`lsa ularga ham telegram botingizni ulab beraman.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
        <section id="blog" className="blog-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">Blog</h3>
                  <p className="subtitle-a">
                    Mening shaxsiy fikirlarimni yozib boruvchi bloglarim.
                  </p>
                  <div className="line-mf"></div>
                </div>
              </div>
            </div>
            <div className="row">
              {this.state.blog.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card card-blog">
                    <div className="card-img">
                      <Link to={`/blog/${item.link}`}>
                        <img
                          src={API_URL + "blog/" + item.photo}
                          alt=""
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="card-body">
                      <div className="card-category-box">
                        <div className="card-category">
                          <h6 className="category">{item.cat_name}</h6>
                        </div>
                      </div>
                      <h3 className="card-title">
                        <Link to={`/blog/${item.link}`}>{item.name}</Link>
                      </h3>
                      <p className="card-description">{item.info}</p>
                    </div>
                    <div className="card-footer">
                      <div className="post-author">
                        <img
                          src={API_URL + item.author_photo}
                          alt=""
                          className="avatar rounded-circle"
                        />
                        <span className="author">{item.author}</span>
                      </div>
                      <div className="post-date">
                        <span className="ion-ios-clock-outline"></span>{" "}
                        {item.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="contact-mf">
                  <div id="contact" className="box-shadow-full">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="title-box-2">
                          <h5 className="title-left">Xabar yuborish</h5>
                        </div>
                        <div>
                          <form
                            action="?"
                            method="post"
                            className="contactForm"
                          >
                            <div id="sendmessage">
                              Sizning xabaringiz yuborildi. Rahmat!
                            </div>
                            <div id="errormessage"></div>
                            <div className="row">
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Ismingiz"
                                    data-rule="minlen:4"
                                    data-msg="Ismiingiz kamida 4 a harfdan ko`p bolishi kerak"
                                  />
                                  <div className="validation"></div>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Sizning e-meilingiz"
                                    data-rule="email"
                                    data-msg="Faqat email manzillarga ruhsat bor"
                                  />
                                  <div className="validation"></div>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    id="subject"
                                    placeholder="Xabar yuborish maqsadingiz"
                                    data-rule="minlen:4"
                                    data-msg="Iltimos kamida 8ta harf"
                                  />
                                  <div className="validation"></div>
                                </div>
                              </div>
                              <div className="col-md-12 mb-3">
                                <div className="form-group">
                                  <textarea
                                    className="form-control"
                                    name="message"
                                    rows="5"
                                    data-rule="required"
                                    data-msg="Please write something for us"
                                    placeholder="Xabar matni"
                                  ></textarea>
                                  <div className="validation"></div>
                                </div>
                              </div>
                              <div className="col-md-12">
                                <button
                                  type="submit"
                                  className="button button-a button-big button-rouded"
                                >
                                  Xabar yuboring
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="title-box-2 pt-4 pt-md-0">
                          <h5 className="title-left">Bog'lanish</h5>
                        </div>
                        <div className="more-info">
                          <p className="lead">
                            Men bilan to`g`ridan to`g`ri bog`lanmoqchi
                            bo`lsangiz telegram orqali bog`lanishingiz mumkin.
                            Meni telegramdan{" "}
                            <a href="https:/t.me/kbarali">@kbarali</a> deb
                            qidiring
                          </p>
                          <ul className="list-ico">
                            <li>
                              <span className="ion-ios-location"></span>{" "}
                              NAMANGAN VILOYATI, UCHQO`RG`ON TUMANI
                            </li>
                            <li>
                              <span className="ion-email"></span>{" "}
                              <a href="mailto: akbarali@webschool.uz">
                                Akbarali@webschool.uz
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="socials">
                          <p>Mening ijtimoiy tarmoqlardagi profillarim</p>
                          <ul>
                            <li>
                              <a
                                href="https://www.facebook.com/akbarali.web.dev/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span className="ico-circle">
                                  <i className="ion-social-facebook"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/bekorchibekarov/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span className="ico-circle">
                                  <i className="ion-social-instagram"></i>
                                </span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://twitter.com/Akbarali006"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <span className="ico-circle">
                                  <i className="ion-social-twitter"></i>
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="copyright-box">
                    {/* <p className="copyright">&copy; Copyright <strong>DevFolio</strong>. All Rights Reserved</p> */}
                    <div className="credits">
                      Dizayn{" "}
                      <a href="https://bootstrapmade.com/">BootstrapMade</a>{" "}
                      tomonidan yaratilgan. Men Frontendni unchalik yaxshi eplay
                      olmayman :)
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
export default Home;
