import React from 'react';
import PreviewDescription from './PreviewDescription';
import PreviewHeader from './PreviewHeader';
import { useFormContext } from 'react-hook-form';

const Preview = () => {
    const { watch } = useFormContext();
    const {
        city,
        company,
        degree,
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
                <section className='preview_main_left'>
                    <PreviewDescription />    
                </section>
                <section className='preview_main_right'></section>
            </section>
        </section>
    );
};

export default Preview;