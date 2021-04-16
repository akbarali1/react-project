import React from 'react';
import {API_URL} from './Config';

class Header extends React.Component {
    render() {
       return (
<section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{  
                        backgroundImage: `url(${API_URL}/overlay-bg.jpg)`,
                    }}>
    <div className="overlay-mf"></div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="contact-mf">
            <div id="contact" className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="title-box-2">
                    <h5 className="title-left">
                      Xabar yuborish
                    </h5>
                  </div>
                  <div>
                      <form action="?" method="post" className="contactForm">
                      <div id="sendmessage">Sizning xabaringiz yuborildi. Rahmat!</div>
                      <div id="errormessage"></div>
                      <div className="row">
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Ismingiz" data-rule="minlen:4" data-msg="Ismiingiz kamida 4 a harfdan ko`p bolishi kerak" />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Sizning e-meilingiz" data-rule="email" data-msg="Faqat email manzillarga ruhsat bor" />
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input type="text" className="form-control" name="subject" id="subject" placeholder="Xabar yuborish maqsadingiz" data-rule="minlen:4" data-msg="Iltimos kamida 8ta harf" />
                              <div className="validation"></div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-3">
                          <div className="form-group">
                            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Xabar matni"></textarea>
                            <div className="validation"></div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="button button-a button-big button-rouded">Xabar yuboring</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="title-box-2 pt-4 pt-md-0">
                    <h5 className="title-left">
                     Bog'lanish
                    </h5>
                  </div>
                  <div className="more-info">
                    <p className="lead">
                      Men bilan to`g`ridan to`g`ri bog`lanmoqchi bo`lsangiz telegram orqali bog`lanishingiz mumkin. Meni telegramdan <a href="https:/t.me/kbarali">@kbarali</a> deb qidiring
                    </p>
                    <ul className="list-ico">
                      <li><span className="ion-ios-location"></span> NAMANGAN VILOYATI, UCHQO`RG`ON TUMANI</li>
                      <li><span className="ion-email"></span> <a href = "mailto: akbarali@webschool.uz">Akbarali@webschool.uz</a></li>
                    </ul>
                  </div>
                  <div className="socials">
                  <p>Mening ijtimoiy tarmoqlardagi profillarim</p>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/akbarali.web.dev/" target="_blank" rel="noreferrer">
                          <span className="ico-circle"><i className="ion-social-facebook"></i></span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/bekorchibekarov/"  target="_blank" rel="noreferrer">
                          <span className="ico-circle"><i className="ion-social-instagram"></i></span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/Akbarali006"  target="_blank" rel="noreferrer">
                        <span className="ico-circle"><i className="ion-social-twitter"></i></span></a>
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
                Dizayn <a href="https://bootstrapmade.com/">BootstrapMade</a> tomonidan yaratilgan. Men Frontendni unchalik yaxshi eplay olmayman :)
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
       )
    }
}

export default Header;