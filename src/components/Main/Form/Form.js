import React from 'react';
import Education from './Education';
import Employment from './Employment';
import PersonalInformation from './PersonalInformation';

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