import React, { Component } from 'react';

class PreviewEducation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { attendedFrom, attendedTo, degree, university, universityCity } = this.props.data.education;

        return (
            <div className='mainInfoItems'>
                <h3 className='cvSubTitle'>Education</h3>
                <hr></hr>
            </div>
        );
    }
}

export default PreviewEducation;