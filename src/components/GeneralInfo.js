import React, { Component } from 'react';

class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'John Smith',
            city: 'Parowan',
            state: 'UT',
            zipCode: 84761,
            phone: '702-758-7789',
            email: 'resume@gmail.com',
        }
    }

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