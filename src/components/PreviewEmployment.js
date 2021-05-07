import React, { Component } from 'react';
import PreviewEmploymentInfo from './PreviewEmploymentInfo';

class PreviewEmployment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='mainInfoItems'>
                <h3 className='cvSubTitle'>Employment</h3>
                <hr></hr>
                <PreviewEmploymentInfo data={this.props.data} />
            </div>
        );
    }
}

export default PreviewEmployment;