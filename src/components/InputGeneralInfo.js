import React, { Component } from 'react'

class InputGeneralInfo extends Component {
    render() {
        return (
            <div id='InputGeneralInfo'>
                <div className='inputField'>
                    <label htmlFor='fullname'>Fullname</label>
                    <input type='text' name='fullname' id='fullname'></input>
                </div>
            </div>
        );
    }
}

export default InputGeneralInfo;