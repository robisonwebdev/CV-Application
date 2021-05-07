import React, { Component } from 'react';

class PreviewEmployment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='mainInfoItems'>
                <h3 className='cvSubTitle'>Experience</h3>
                <hr></hr>
                <div className='previewEmploymentInfo'>
                    <div>{`${fromDate || ''} - ${toDate || ''}`}</div>
                    <div className='positionCompany'>
                        <div>{position || ''}</div>
                        <div>{`${company || ''}, ${companyCity || ''}`}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PreviewEmployment;