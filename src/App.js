import React, { Component } from 'react';
import Form from './components/Form';
import './styles/main.css'
import './styles/cvForm.css';
import './styles/cvLetter.css';
import CVHeader from './components/CVHeader';
import CVFooter from './components/CVFooter';
import CVLetter from './components/CVLetter';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <CVHeader />
        <div id='mainContent'>
          <Form />
          <CVLetter />
        </div>
        <CVFooter />
      </div>

    );
  }
}

export default App;