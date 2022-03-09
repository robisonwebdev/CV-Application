import React from 'react';
import { useFormContext } from 'react-hook-form';

const Preview = () => {
    const { watch } = useFormContext();
    const {
        city,
        company,
        degree,
        description,
        educationCity,
        educationFrom,
        educationTo,
        email,
        employmentCity,
        employmentFrom,
        employmentTo,
        firstName,
        lastName,
        phoneNumber,
        position,
        state,
        title,
        university,
        zipCode
    } = watch();

    return (
        <section className='preview'>
            <section className='preview_header'>
                <strong>{`${firstName} ${lastName}`}</strong>    
                <p>{title}</p>
            </section>
            <section className='preview_main'>
                <section className='preview_main_left'></section>
                <section className='preview_main_right'></section>
            </section>
        </section>
    );
};

export default Preview;