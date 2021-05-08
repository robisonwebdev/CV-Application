import React, { Component } from 'react';

class PreviewEducationInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { attendedFrom, attendedTo, degree, university, universityCity } = this.props.data.education;

        return (
            <div className='previewEducationInfo'>
                <div>{`${attendedFrom || ''} - ${attendedTo || ''}`}</div>
                <div>
                    <div>{`${university || ''}, ${universityCity || ''}`}</div>
                    <div>{`Degree: ${degree || ''}`}</div>
                </div>
            </div>
        );
    }
}

export default PreviewEducationInfo;