import React, { Component } from 'react';

class Description extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='mainInfoItems'>
                <h3 className='cvSubTitle'>Description</h3>
                <hr></hr>
                <div className='previewDescription'>{description}</div>
            </div>
        );
    }
}

export default Description;