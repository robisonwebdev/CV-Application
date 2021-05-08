import React, { Component } from 'react';

class PreviewSideInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { city, email, phoneNumber, state, zipCode } = this.props.data.personalInfo;

        return (
            <div>
                <div className='previewSideInfo'>
                    <h4>Address</h4>
                    <p>{`${city || 'City'}, ${state || 'State'} ${zipCode || 'Zip'}`}</p>
                </div>
                <div className='previewSideInfo'>
                    <h4>Phone Number</h4>
                    <p>{phoneNumber || 'xxx-xxx-xxxx'}</p>
                </div>
                <div className='previewSideInfo'>
                    <h4>Email</h4>
                    <p>{email || 'placeholder@email.com'}</p>
                </div>
            </div>
        );
    }
}

export default PreviewSideInfo;