import React, { Component } from 'react';
import PreviewHeaderInfo from './PreviewHeaderInfo';
import PreviewMainInfo from './PreviewMainInfo';
import PreviewSideInfo from './PreviewSideInfo';

class PreviewCV extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='previewCV'>
                <div id='previewHeader'>
                    <PreviewHeaderInfo />
                </div>
                <div id='previewBody'>
                    <PreviewMainInfo />
                    <PreviewSideInfo />
                </div>
            </div>
        );
    }
}

export default PreviewCV;