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
                <div>
                    <label htmlFor='fromDate'>From: </label>
                    <input type='date' name='fromDate' onChange={(e) => this.props.handleChange(e)} />
                </div>
                <div>
                    <label htmlFor='toDate'>To: </label>
                    <input type='date' name='toDate' onChange={(e) => this.props.handleChange(e)} />
                </div>
            </div>
        );
    }
}

export default EmploymentInformation;