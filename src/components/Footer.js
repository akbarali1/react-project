import React from 'react';

class Footer extends React.Component {
    render() {
       return (
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
       )
    }
}

export default Footer;