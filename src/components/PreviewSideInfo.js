import React, { Component } from 'react';

class PreviewSideInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { city, email, phoneNumber, state, zipCode } = this.props.data.personalInfo;

        return (
            <div id="sideInfo">
                <h3>Personal Details</h3>
                <div>
                    <h4>Address</h4>
                    <p>{`${city}, ${state} ${zipCode}`}</p>
                </div>
                <div>
                    <h4>Phone Number</h4>
                    <p>{phoneNumber}</p>
                </div>
                <div>
                    <h4>Email</h4>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}

export default PreviewSideInfo;