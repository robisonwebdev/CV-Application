import React, { Component } from 'react';

class EmploymentInformation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='employmentInformation'>
                <input type='text' id={`position${this.props.number}`} placeholder='Position' onChange={(e) => this.props.handleChange(e)} />
            </div>
        );
    }
}

export default EmploymentInformation;