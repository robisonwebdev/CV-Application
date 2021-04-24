import React, { Component } from 'react';
import EmploymentInformation from './EmploymentInformation';

class Employment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            children: [],
            number: 2,
        };

        this.handleButton = this.handleButton.bind(this);
    }

    handleButton() {
        this.setState((prevState) => ({
            number: prevState.number + 1,
            children: [
                ...this.state.children,
                <EmploymentInformation number={this.state.number} />
            ],
        }))
    }

    render() {
        return (
            <div id='employment'>
                <h1>Employment</h1>
                <EmploymentInformation number={1} />
                {this.state.children.map(child => child)}
                <button type='button' onClick={() => this.handleButton()}>Add</button>
            </div>
        );
    }
}

export default Employment;