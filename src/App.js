import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Sebastian's Contact Manager" />
        <Contact name="Sebastian Crossa" email="crossasebastian@gmail.com" phoneNumber="+52 (667) 755 9878" />
        <Contact name="Joe Bargain" email="jbargain@gmail.com" phoneNumber="+52 (622) 571 3042" />

        <Contact />
      </div>
    );
  }
}

export default App;
