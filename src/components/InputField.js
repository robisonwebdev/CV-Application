import React, { Component } from 'react'

class InputGeneralInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='inputField'>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input type='text' name={this.props.name} id={this.props.name} onChange={(e) => this.props.handleChange(e)}></input>
            </div>
        );
    }
}

export default InputGeneralInfo;