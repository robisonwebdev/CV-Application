import React, { Component } from 'react';

class PreviewMainInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="mainInfo">
                <div>
                    <h3>Description</h3>
                </div>
                <div>
                    <h3>Experience</h3>
                </div>
                <div>
                    <h3>Education</h3>
                </div>
            </div>
        );
    }
}

export default PreviewMainInfo;