import React, { Component } from 'react';
import '../App/App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    let aboutMessage = `We are actors working with actors and we react to things`
    let phone= `Phone: 1-800-WE-REACT`
    let email=`Email: info@reactActors.com`
    return (
      <div className='App'>
        <Header />
        <About />
        <p>{aboutMessage}</p>
        <Contact />
        <p>{phone}</p>
        <p>{email}</p>
        <Footer />
      </div>
    );  
    }
}

export default App;
