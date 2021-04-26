import React, { Component } from 'react';

class EmploymentInformation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='employmentInformation'>
                <input type='text' name='position' placeholder='Position' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' name='company' placeholder='Company' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' name='fromDate' placeholder='From' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' name='toDate' placeholder='To' onChange={(e) => this.props.handleChange(e)} />
            </div>
        );
    }
}

export default EmploymentInformation;