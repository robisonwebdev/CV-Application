import React, { Component } from 'react';

class PreviewCV extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='previewCV'>{this.props.data.degree}</div>
        );
    }
}

export default PreviewCV;