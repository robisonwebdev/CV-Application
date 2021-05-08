import React, { Component } from 'react';

class PreviewHeaderInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName, title } = this.props.data.personalInfo;

        return (
            <div className='previewHeaderInfo'>
                <h1>{`${firstName || ''} ${lastName || ''}`}</h1>
                <h2>{title || ''}</h2>
            </div>
        );
    }
}

export default PreviewHeaderInfo;