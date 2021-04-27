import React, { Component } from 'react';

class PersonalInformation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='personalInfo'>
                <h1 className='cvFormHeaders'>Personal Information</h1>
                <input type='text' name='firstName' placeholder='First name' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' name='lastName' placeholder='Last name' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' name='city' placeholder='City' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' name='state' placeholder='State' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' name='zipCode' placeholder='Zip code' onChange={(e) => this.props.handleChange(e)} />
                <input type='tel' name='phoneNumber' placeholder='Phone number' onChange={(e) => this.props.handleChange(e)} />
                <input type='email' name='email' placeholder='Email' onChange={(e) => this.props.handleChange(e)} />
            </div>
        );
    }
}

export default PersonalInformation;