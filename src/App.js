import React, { Component, useState } from 'react';
import Form from './components/Form';
import './styles/main.css'
import './styles/cvForm.css';
import './styles/previewCV.css';
import CVHeader from './components/CVHeader';
import CVFooter from './components/CVFooter';
import PreviewCV from './components/PreviewCV';

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);

//     this.state = {
//       personalInfo: {},
//       employment: {},
//       education: {},
//     };
//   }

//   handleChange(e) {
//     const target = e.target;
//     const value = target.value;
//     const name = target.name;
//     const data = target.dataset.state

//     this.setState((prevState) => ({
//       [data]: {
//         ...prevState[data],
//         [name]: value
//       }
//     }))
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     console.log(this.state)
//   }

//   render() {
//     return (
//       <div id='app'>
//         <CVHeader />
//         <div id='mainContent'>
//           <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
//           <PreviewCV data={this.state} />
//         </div>
//         <CVFooter />
//       </div>

//     );
//   }
// }

const App = () => {

}

export default App;