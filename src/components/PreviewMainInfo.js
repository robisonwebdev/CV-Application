import React, { Component } from 'react';
import Description from './Description';
import PreviewEmployment from './PreviewEmployment';

class PreviewMainInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { attendedFrom, attendedTo, degree, university, universityCity } = this.props.data.education;


        return (
            <div id="mainInfo">
                <Description data={this.props.data} />
                <PreviewEmployment />
                <div className='mainInfoItems'>
                    <h3 className='cvSubTitle'>Education</h3>
                    <hr></hr>
                    <div className='education'>
                        <div>{`${attendedFrom} - ${attendedTo}`}</div>
                        <div>
                            <div>{`${university}, ${universityCity}`}</div>
                            <div>{`Degree: ${degree}`}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PreviewMainInfo;