import React, { Component } from 'react';
import PreviewDescription from './PreviewDescription';
import PreviewEducation from './PreviewEducation';
import PreviewEmployment from './PreviewEmployment';

class PreviewMainInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="mainInfo">
                <PreviewDescription data={this.props.data} />
                <PreviewEmployment data={this.props.data} />
                <PreviewEducation data={this.props.data} />
            </div>
        );
    }
}

export default PreviewMainInfo;