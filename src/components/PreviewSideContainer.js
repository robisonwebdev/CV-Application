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
            </div>
        );
    }
}

export default PreviewSideContainer;