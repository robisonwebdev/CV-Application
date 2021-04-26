import React, { Component } from 'react';
import Form from './components/Form';
import './styles/main.css'
import './styles/cvForm.css';
import CVHeader from './components/CVHeader';
import CVFooter from './components/CVFooter';

class App extends Component {
  render() {
    return (
      <div id='app'>
        <CVHeader />
        <Form />
        <CVFooter />
      </div>

    );
  }
}

export default App;