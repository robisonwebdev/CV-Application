import React, { Component } from 'react';
import EducationInformation from './EducationInformation';

class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='education'>
                <h1 className='cvFormHeaders'>Education</h1>
                <EducationInformation handleChange={this.props.handleChange} />
            </div>
        );
    }
}

export default Education;