import React, { Component } from 'react';

class PersonalInformation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='personalInfo'>
                <h1>Personal Information</h1>
                <input type='text' id='firstName' placeholder='First name' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' id='lastName' placeholder='Last name' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' id='city' placeholder='City' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' id='state' placeholder='State' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' id='zipCode' placeholder='Zip code' onChange={(e) => this.props.handleChange(e)} />
                <input type='tel' id='phoneNumber' placeholder='Phone number' onChange={(e) => this.props.handleChange(e)} />
                <input type='email' id='email' placeholder='Email' onChange={(e) => this.props.handleChange(e)} />
            </div>
        );
    }
}

export default PersonalInformation;