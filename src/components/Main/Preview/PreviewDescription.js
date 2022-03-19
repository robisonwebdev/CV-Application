import React from 'react';
import { useFormContext } from 'react-hook-form';
import '../../../styles/Main/Preview/PreviewDescription.css'

const PreviewDescription = () => {
    const { watch } = useFormContext();
    const { description } = watch();

    const displayInformation = (value) => {
        if (value === '') return false;

        return true;
    };

    return (
        <section className='preview_description'>
            <div className='description_header'>
                <h3>Description</h3>
                <hr />
            </div>
            <p className='description'>{displayInformation(description) ? description : 'Professional summary entered here...'}</p>
        </section>
    );
};

export default PreviewDescription;