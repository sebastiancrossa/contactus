import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Sebastian's Contact Manager" />

        <div className="container">
          <Contact name="Sebastian Crossa" email="crossasebastian@gmail.com" phoneNumber="+52 (667) 755 9878" />
          <Contact name="Joe Bargain" email="jbargain@gmail.com" phoneNumber="+52 (622) 571 3042" />
        </div>
      </div>
    );
  }
}

export default App;
