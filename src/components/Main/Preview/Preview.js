import React from 'react';
import PreviewDescription from './PreviewDescription';
import PreviewEmployment from './PreviewEmployment';
import PreviewHeader from './PreviewHeader';
import { useFormContext } from 'react-hook-form';

const Preview = () => {
    const { watch } = useFormContext();
    const {
        city,
        degree,
        educationCity,
        educationFrom,
        educationTo,
        email,
        phoneNumber,
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
                    <PreviewEmployment />  
                </section>
                <section className='preview_main_right'></section>
            </section>
        </section>
    );
};

export default Preview;