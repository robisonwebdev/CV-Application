import React, { Component } from 'react'

class EducationInformation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='educationInformation'>
                <input type='text' name='school' placeholder='School' onChange={(e) => this.props.handleChange(e)} />
                <input type='text' name='major' placeholder='Major' onChange={(e) => this.props.handleChange(e)} />
                <div>
                    <label htmlFor='graduationDate'>Graduation Date: </label>
                    <input type='date' name='graduationDate' onChange={(e) => this.props.handleChange(e)} />
                </div>
            </div>
        );
    }
}

export default EducationInformation;