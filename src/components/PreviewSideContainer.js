import React, { Component } from 'react';

class PreviewSideContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { city, email, phoneNumber, state, zipCode } = this.props.data.personalInfo;

        return (
            <div id="sideInfoContainer">
                <h3>Personal Details</h3>
                <hr></hr>
                <div>
                    <h4>Address</h4>
                    <p>{`${city || 'City'}, ${state || 'State'} ${zipCode || 'Zip'}`}</p>
                </div>
                <div>
                    <h4>Phone Number</h4>
                    <p>{phoneNumber || 'xxx-xxx-xxxx'}</p>
                </div>
                <div>
                    <h4>Email</h4>
                    <p>{email || 'placeholder@email.com'}</p>
                </div>
            </div>
        );
    }
}

export default PreviewSideContainer;