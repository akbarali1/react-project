import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Clients from './components/Clients';
import Work from './components/Work';
// import Fikrlar from './components/Fikrlar';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Clients />
      <Work />
      {/* <Fikrlar /> */}
      <Blog />
      <Contact />
      <a href="/#" className="back-to-top">
      <i className="fa fa-chevron-up"></i>
    </a>
    <div id="preloader"></div>
    </>
  );
}

export default App;