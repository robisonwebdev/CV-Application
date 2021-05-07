import React, { Component } from 'react';

class PreviewEmploymentInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='previewEmploymentInfo'>
                <div>{`${fromDate || ''} - ${toDate || ''}`}</div>
                <div className='positionCompany'>
                    <div>{position || ''}</div>
                    <div>{`${company || ''}, ${companyCity || ''}`}</div>
                </div>
            </div>
        );
    }
}

export default PreviewEmploymentInfo;