import React, { Component } from 'react';
import PreviewSideInfo from './PreviewSideInfo';

class PreviewSideContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="sideInfoContainer">
                <h3>Personal Details</h3>
                <hr></hr>
                <PreviewSideInfo data={this.props.data} />
            </div>
        );
    }
}

export default PreviewSideContainer;