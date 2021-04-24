import React, { Component } from 'react';
import Employment from './Employment';
import PersonalInformation from './PersonalInformation';

class Form extends Component {
    constructor() {
        super()

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {};
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.id;

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <PersonalInformation handleChange={this.handleChange} />
                    <Employment />
                    <button type='submit' value='Submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;