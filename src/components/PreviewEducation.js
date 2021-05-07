import React, { Component } from 'react';

class PreviewEducation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
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
        );
    }
}

export default PreviewEducation;