import React, { Component } from 'react';
import EmploymentInformation from './EmploymentInformation';

class Employment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            children: [],
        };

        this.handleButton = this.handleButton.bind(this);
    }

    handleButton() {
        this.setState((prevState) => ({
            children: [
                ...this.state.children,
                <EmploymentInformation />
            ],
        }))
    }

    render() {
        return (
            <div id='employment'>
                <h1 className='cvFormHeaders'>Employment</h1>
                <EmploymentInformation handleChange={this.props.handleChange} />
                {this.state.children.map(child => child)}
                {/* <button type='button' onClick={() => this.handleButton()}>Add</button> */}
            </div>
        );
    }
}

export default Employment;