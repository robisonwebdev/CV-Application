import React, { Component } from 'react';
import PreviewHeaderInfo from './PreviewHeaderInfo';
import PreviewMainInfo from './PreviewMainInfo';
import PreviewSideContainer from './PreviewSideContainer';

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
                    <PreviewSideContainer data={this.props.data} />
                </div>
            </div>
        );
    }
}

export default PreviewCV;