import React, { Component } from 'react';

class PreviewMainInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { fromDate, toDate, position, company, companyCity } = this.props.data.employment;

        return (
            <div id="mainInfo">
                <div className='mainInfoItems'>
                    <h3 className='cvSubTitle'>Description</h3>
                    <hr></hr>
                </div>
                <div className='mainInfoItems'>
                    <h3 className='cvSubTitle'>Experience</h3>
                    <hr></hr>
                    <div className='previewEmploymentInfo'>
                        <div>{`${fromDate} - ${toDate}`}</div>
                        <div className='positionCompany'>
                            <div>{position}</div>
                            <div>{`${company}, ${companyCity}`}</div>
                        </div>
                    </div>
                </div>
                <div className='mainInfoItems'>
                    <h3 className='cvSubTitle'>Education</h3>
                    <hr></hr>
                </div>
            </div>
        );
    }
}

export default PreviewMainInfo;