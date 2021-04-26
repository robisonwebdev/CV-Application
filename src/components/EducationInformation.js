import React, { Component } from 'react'

class EducationInformation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='educationInformation'>
                <input type='text' name='university' placeholder='University' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' name='universityCity' placeholder='City' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' name='degree' placeholder='Degree' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' name='attendedFrom' placeholder='From' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' name='attendedTo' placeholder='To' onChange={(e) => this.props.handleChange(e)} />
            </div>
        );
    }
}

export default EducationInformation;