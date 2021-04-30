import React, { Component } from 'react';

class PreviewCV extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='previewCV'>
                <div id='previewHeader'>
                    <PreviewHeader />
                </div>
                <div id='previewBody'>
                    <PreviewMain />
                    <previewSide />
                </div>
            </div>
        );
    }
}

export default PreviewCV;