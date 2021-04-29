import React, { Component } from 'react';
import Form from './components/Form';
import './styles/main.css'
import './styles/cvForm.css';
import './styles/cvLetter.css';
import CVHeader from './components/CVHeader';
import CVFooter from './components/CVFooter';
import CVLetter from './components/CVLetter';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      personalInfo: {},
      employment: {},
      education: {},
    };
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const data = target.dataset.state

    this.setState((prevState) => ({
      [data]: {
        ...prevState[data],
        [name]: value
      }
    }))
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div id='app'>
        <CVHeader />
        <div id='mainContent'>
          <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
          <CVLetter data={this.state.education} />
        </div>
        <CVFooter />
      </div>

    );
  }
}

export default App;