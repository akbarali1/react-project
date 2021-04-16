import React from 'react';
import {API_URL, API_V1} from './Config';

class About extends React.Component {
  state = {
    yearData: [],
    languages: []

  }
  componentDidMount(){
    fetch(API_V1+'/year-data/')
    .then((response) => response.json())
    .then(data => {
    //  console.log(data);
      this.setState({yearData: data});
    });

    fetch(API_V1+'/languages/')
    .then((languages) => languages.json())
    .then(data => {
      // console.log(data);
      this.setState({languages: data});
    })
  }
    render() {
       return (
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
                      <img src={API_URL+"code.jpg"} alt="" className="img-fluid rounded b-shadow-a" />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-7">
                    <div className="about-info">
                      <p><span className="title-s">Ism: </span> <span>Akbarali</span></p>
                      <p><span className="title-s">Soha: </span> <span>Web dasturchi</span></p>
                      <p><span className="title-s">Email: </span> <span><a href="mailto: akbarali@webschool.uz">akbarali@webschool.uz</a></span></p>
                      <p><span className="title-s">Yosh: </span> <span>22</span></p>
                    </div>
                  </div>
                </div>
                <div className="skill-mf">
                  <p className="title-s">Ko'nkmalar</p>
                  {this.state.languages.map((language)=> (
                    <div key={language.id}> 
                    <span key={language.id}>{language.language}</span>
                    <span className="pull-right">{language.percent}</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar"  style={{width: language.percent}}></div>
                    </div>
                    </ div>
                  ))}

                </div>
              </div>
              <div className="col-md-6">
                <div className="about-me pt-4 pt-md-0">
                  <div className="title-box-2">
                    <h5 className="title-left">
                      Men haqimda
                    </h5>
                  </div>
                  {this.state.yearData.map((year)=> (
                    <p className="lead" key={year.id}>{year.text}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
       )
    }
}

export default About;