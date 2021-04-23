import React, { Component } from 'react';
import InputGeneralInfo from './InputGeneralInfo';
import cvData from '../cvData';

class CVForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: cvData,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('Submit button clicked');
    }

    render() {
        return (
            <div id='CVForm'>
                <form>
                    <InputGeneralInfo />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default CVForm;