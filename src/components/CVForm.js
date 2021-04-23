import React, { Component } from 'react';
import InputGeneralInfo from './InputGeneralInfo';
import cvData from '../cvData';

class CVForm extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div id='CVForm'>
                <form onSubmit={this.handleSubmit}>
                    <InputGeneralInfo handleChange={this.handleChange} />
                    <button type='submit' value='Submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default CVForm;