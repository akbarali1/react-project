import React from 'react';

class Service extends React.Component {
    render() {
       return (
        <section id="service" className="services-mf route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">
                Men nimalar qila olaman ?
                </h3>
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
                  <span className="ico-circle"><i className="ion-monitor"></i></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Web Design</h2>
                  <p className="s-description text-center">
                    Agarda sizda tayyor PSD bo`lsa HTML CSS JSda yasab berishim mumkun. <br /> (Lekin o`zim 0 dan fantaziya qilib dizayn qila olmayman).
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle"><i className="ion-code-working"></i></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Web backend</h2>
                  <p className="s-description text-center">
                   Sizda tayyor Frontend bo`lsa (HTML CSS JS) men YII2, Johncms yoki sof phpda, kelajakda esa Laravelda Backend qismini qilib berishim mumkun.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
<svg style={{marginTop: '-15px'}} id="Capa_1" enableBackground="new 0 0 512 512" height="60" width="60"viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"><g><path d="m440 279c34.738 0 63-28.262 63-63 0-29.569-20.482-54.433-48-61.181v-75.319l26-19.5c3.777-2.833 6-7.278 6-12v-33c0-8.284-6.716-15-15-15s-15 6.716-15 15v25.5l-17 12.75-17-12.75v-25.5c0-8.284-6.716-15-15-15s-15 6.716-15 15v33c0 4.722 2.223 9.167 6 12l26 19.5v75.319c-9.058 2.221-17.349 6.405-24.403 12.076-7.061-11.751-19.333-20.025-33.597-21.61v-34.285c0-61.206-49.794-111-111-111s-111 49.794-111 111v34.285c-14.264 1.584-26.536 9.858-33.597 21.61-7.053-5.671-15.344-9.854-24.403-12.076v-75.319l26-19.5c3.777-2.833 6-7.278 6-12v-33c0-8.284-6.716-15-15-15s-15 6.716-15 15v25.5l-17 12.75-17-12.75v-25.5c0-8.284-6.716-15-15-15s-15 6.716-15 15v33c0 4.722 2.223 9.167 6 12l26 19.5v75.319c-27.518 6.748-48 31.612-48 61.181 0 34.738 28.262 63 63 63 12.093 0 23.396-3.432 33-9.363v100.711c-35.875 3.528-64 33.865-64 70.652 0 39.149 31.851 71 71 71h288c39.149 0 71-31.851 71-71 0-36.787-28.125-67.124-64-70.652v-100.711c9.604 5.931 20.907 9.363 33 9.363zm0-96c18.196 0 33 14.804 33 33s-14.804 33-33 33-33-14.804-33-33 14.804-33 33-33zm-265-72c0-44.663 36.336-81 81-81s81 36.337 81 81v34h-162zm-40 79c0-8.271 6.729-15 15-15h212c8.271 0 15 6.729 15 15v180h-242zm207.089 210c-17.452 24.578-17.47 57.398 0 82h-172.178c17.452-24.578 17.47-57.398 0-82zm-270.089-151c-18.196 0-33-14.804-33-33s14.804-33 33-33 33 14.804 33 33-14.804 33-33 33zm-1 192c0-22.607 18.393-41 41-41s41 18.393 41 41-18.393 41-41 41-41-18.393-41-41zm370 0c0 22.607-18.393 41-41 41s-41-18.393-41-41 18.393-41 41-41 41 18.393 41 41z"/><path d="m192 335h128c8.284 0 15-6.716 15-15v-80c0-8.284-6.716-15-15-15h-128c-8.284 0-15 6.716-15 15v80c0 8.284 6.716 15 15 15zm15-80h98v50h-98z"/><circle cx="288.005" cy="96" r="15.005"/><circle cx="399.995" cy="441" r="15.005"/><circle cx="224.005" cy="96" r="15.005"/><circle cx="112" cy="441" r="15.005"/></g></svg></span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Telegram BOT</h2>
                  <p className="s-description text-center">
                    Turli xildagi telegram botlarni qilib berolaman. Saytingiz bo`lsa ularga ham telegram botingizni ulab beraman.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       )
    }
}

export default Service;