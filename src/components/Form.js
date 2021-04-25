import React, { Component } from 'react';
import Education from './Education';
import Employment from './Employment';
import PersonalInformation from './PersonalInformation';

class Form extends Component {
    constructor() {
        super()

        this.handlePersonalInfoChange = this.handlePersonalInfoChange.bind(this);
        this.handleEmploymentChange = this.handleEmploymentChange.bind(this);
        this.handleEducationChange = this.handleEducationChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            personalInfo: {},
            employment: {},
            education: {},
        };
    }

    handlePersonalInfoChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState((prevState) => ({
            personalInfo: {
                ...prevState.personalInfo,
                [name]: value
            }
        }))
    }

    handleEmploymentChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState((prevState) => ({
            employment: {
                ...prevState.employment,
                [name]: value
            }
        }))
    }

    handleEducationChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState((prevState) => ({
            education: {
                ...prevState.education,
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <PersonalInformation handleChange={this.handlePersonalInfoChange} />
                    <Employment handleChange={this.handleEmploymentChange} />
                    <Education handleChange={this.handleEducationChange} />
                    <button type='submit' value='Submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;