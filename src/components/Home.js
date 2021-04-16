import React from 'react';
import {API_URL} from './Config';

class Home extends React.Component {
    render() {
       return (
            <div id="home" className="intro route bg-image" style={{ 
                backgroundImage: `url("${API_URL}programming-language.jpg")` 
              }}>
            <div className="overlay-itro"></div>
            <div className="intro-content display-table">
            <div className="table-cell">
                <div className="container">
                <p className="display-6 color-d">Assalomu alaykum, men:</p>
                <h1 className="intro-title mb-4"> Akbaraliman</h1>
                <p className="intro-subtitle"><span className="text-slider-items">Web dasturchi, Backend dasturchi</span><strong className="text-slider"></strong></p>
                </div>
            </div>
            </div>
            </div>
       )
    }
}

export default Home;