import React, { Component } from 'react';

class GeneralInfo extends Component {
    render() {
        const { name, city, state, zipCode, phone, email } = this.state;

        return (
            <div id='GeneralInfo'>
                <h1>{name}</h1>
                <p>{city}, {state}, {zipCode}</p>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        );
    }
}

export default GeneralInfo;