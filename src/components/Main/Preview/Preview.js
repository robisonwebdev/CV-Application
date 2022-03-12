import React from 'react';
import PreviewHeader from './PreviewHeader';
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
        phoneNumber,
        position,
        state,
        university,
        zipCode
    } = watch();

    return (
        <section className='preview'>
            <PreviewHeader />
            <section className='preview_main'>
                <section className='preview_main_left'></section>
                <section className='preview_main_right'></section>
            </section>
        </section>
    );
};

export default Preview;