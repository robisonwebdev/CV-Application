import React from 'react';
import { useFormContext } from 'react-hook-form';

const PreviewHeader = () => {
    const { watch } = useFormContext();
    const { firstName, lastName, title} = watch()

    return (
        <section className='preview_header'>
            <h1>{`${firstName} ${lastName}`}</h1>
            <p>{title}</p>
        </section>
    );
};

export default PreviewHeader;