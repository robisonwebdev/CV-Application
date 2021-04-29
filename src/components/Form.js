import React, { Component } from 'react';
import Education from './Education';
import Employment from './Employment';
import PersonalInformation from './PersonalInformation';

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='cvForm'>
                <form onSubmit={this.props.handleSubmit}>
                    <PersonalInformation handleChange={this.props.handleChange} />
                    <Employment handleChange={this.props.handleChange} />
                    <Education handleChange={this.props.handleChange} />
                    <div id='submitForm'><button type='submit' id='btnSubmit' value='Submit'>Submit</button></div>
                </form>
            </div>
        );
    }
}

export default Form;