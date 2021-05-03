import React, { Component } from 'react';

class PreviewMainInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="mainInfo">
                <div className='mainInfoItems'>
                    <h3 className='cvSubTitle'>Description</h3>
                    <hr></hr>
                </div>
                <div className='mainInfoItems'>
                    <h3 className='cvSubTitle'>Experience</h3>
                    <hr></hr>
                </div>
                <div className='mainInfoItems'>
                    <h3 className='cvSubTitle'>Education</h3>
                    <hr></hr>
                </div>
            </div>
        );
    }
}

export default PreviewMainInfo;