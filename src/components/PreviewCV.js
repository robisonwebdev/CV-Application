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
                    <PreviewHeaderInfo data={this.props.data} />
                </div>
                <div id='previewBody'>
                    <PreviewMainInfo data={this.props.data} />
                    <PreviewSideInfo data={this.props.data} />
                </div>
            </div>
        );
    }
}

export default PreviewCV;