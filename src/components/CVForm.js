import React, { Component } from 'react';
import InputGeneralInfo from './InputGeneralInfo';

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
                    <div id='InputGeneralInfo'>
                        <InputGeneralInfo name='fullname' label='Fullname' handleChange={this.handleChange} />
                        <InputGeneralInfo name='city' label='City' handleChange={this.handleChange} />
                        <InputGeneralInfo name='state' label='State' handleChange={this.handleChange} />
                        <InputGeneralInfo name='zip' label='Zip Code' handleChange={this.handleChange} />
                        <InputGeneralInfo name='phone' label='Phone Number' handleChange={this.handleChange} />
                        <InputGeneralInfo name='email' label='Email' handleChange={this.handleChange} />
                    </div>
                    <button type='submit' value='Submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default CVForm;