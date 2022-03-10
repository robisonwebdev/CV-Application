import React from 'react';
import Education from './Education';
import Employment from './Employment';
import PersonalInformation from './PersonalInformation';
import '../../../styles/Main/Form/Form.css';

const Form = () => {
    return (
        <form>
            <PersonalInformation />
            <Employment />
            <Education />
        </form>
    );
};

export default Form;