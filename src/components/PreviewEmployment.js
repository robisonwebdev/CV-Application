import React, { Component } from 'react';
import PreviewEmploymentInfo from './PreviewEmploymentInfo';

class PreviewEmployment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { fromDate, toDate, position, company, companyCity } = this.props.data.employment;

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