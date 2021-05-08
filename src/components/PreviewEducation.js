import React, { Component } from 'react';
import PreviewEducationInfo from './PreviewEducationInfo';

class PreviewEducation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='mainInfoItems'>
                <h3 className='cvSubTitle'>Education</h3>
                <hr></hr>
                <PreviewEducationInfo data={this.props.data} />
            </div>
        );
    }
}

export default PreviewEducation;