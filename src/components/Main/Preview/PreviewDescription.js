import React from 'react';
import { useFormContext } from 'react-hook-form';
import '../../../styles/Main/Preview/PreviewDescription.css'

const PreviewDescription = () => {
    const { watch } = useFormContext();
    const { description } = watch();

    return (
        <section className='preview_description'>
            <h3>Description</h3>
            <hr />
            <p>{description}</p>
        </section>
    );
};

export default PreviewDescription;