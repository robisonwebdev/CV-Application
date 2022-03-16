import React from 'react';
import { useFormContext } from 'react-hook-form';
import '../../../styles/Main/Preview/PreviewHeader.css'

const PreviewHeader = () => {
    const { watch } = useFormContext();
    const { firstName, lastName, title} = watch();

    const displayInformation = (value) => {
        if (value === '') return false;

        return true;
    };

    return (
        <section className='preview_header'>
            <h1>{`${displayInformation(firstName) ? firstName : 'First Name'} ${displayInformation(lastName) ? lastName : 'Last Name'}`}</h1>
            <p>{displayInformation(title) ? title : 'Title'}</p>
        </section>
    );
};

export default PreviewHeader;