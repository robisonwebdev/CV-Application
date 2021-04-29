import React, { Component } from 'react';

class EmploymentInformation extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='employmentInformation'>
                <input type='text' data-state='employment' name='position' placeholder='Position' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' data-state='employment' name='company' placeholder='Company' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' data-state='employment' name='fromDate' placeholder='From' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' data-state='employment' name='toDate' placeholder='To' onChange={(e) => this.props.handleChange(e)} />
            </div>
        );
    }
}

export default EmploymentInformation;