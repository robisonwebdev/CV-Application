import React, { Component } from 'react'

class InputGeneralInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='InputGeneralInfo'>
                <div className='inputField'>
                    <label htmlFor='fullname'>Fullname</label>
                    <input type='text' name='fullname' id='fullname' onChange={(e) => this.props.handleChange(e)}></input>
                </div>
                <div className='InputGeneralInfo'>
                    <label htmlFor='city'>City</label>
                    <input type='text' name='city' id='city' onChange={(e) => this.props.handleChange(e)}></input>
                </div>
                <div className='InputGeneralInfo'>
                    <label htmlFor='state'>State</label>
                    <input type='text' name='state' id='state' onChange={(e) => this.props.handleChange(e)}></input>
                </div>
                <div className='InputGeneralInfo'>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='text' name='phone' id='phone' onChange={(e) => this.props.handleChange(e)}></input>
                </div>
                <div className='InputGeneralInfo'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' id='email' onChange={(e) => this.props.handleChange(e)}></input>
                </div>
            </div>
        );
    }
}

export default InputGeneralInfo;