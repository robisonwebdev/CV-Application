import React, { Component } from 'react';

class PersonalInformation extends Component {
    render() {
        return (
            <div id='personalInfo'>
                <input type='text' id='firstName' placeholder='First name' />
                <input type='text' id='lastName' placeholder='Last name' />
                <input type='text' id='city' placeholder='City' />
                <input type='text' id='state' placeholder='State' />
                <input type='text' id='zipCode' placeholder='Zip code' />
                <input type='tel' id='phoneNumber' placeholder='Phone number' />
                <input type='email' id='email' placeholder='Email' />
            </div>
        );
    }
}

export default PersonalInformation;