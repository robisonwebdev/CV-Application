import React from 'react';
import Employment from './Employment';
import PersonalInformation from './PersonalInformation';

const Form = () => {
    return (
        <form>
            <PersonalInformation />
            <Employment />
        </form>
    );
};

export default Form;