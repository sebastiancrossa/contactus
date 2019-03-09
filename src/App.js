import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import Header from './components/layout/Header';
import { Provider } from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contactus" />

          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
