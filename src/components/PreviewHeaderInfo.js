import React, { Component } from 'react';

class PreviewHeaderInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { firstName, lastName } = this.props.data.personalInfo;
        return (
            <div>
                <h1>{`${firstName} ${lastName}`}</h1>
            </div>
        );
    }
}

export default PreviewHeaderInfo;