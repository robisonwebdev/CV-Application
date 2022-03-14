import React from 'react';
import PreviewDescription from './PreviewDescription';
import PreviewEducation from './PreviewEducation';
import PreviewEmployment from './PreviewEmployment';
import PreviewHeader from './PreviewHeader';
import { useFormContext } from 'react-hook-form';
import '../../../styles/Main/Preview/Preview.css';

const Preview = () => {
    const { watch } = useFormContext();
    const {
        city,
        email,
        phoneNumber,
        state,
        zipCode
    } = watch();

    return (
        <section className='preview'>
            <PreviewHeader />
            <section className='preview_main'>
                <section className='preview_main_left'>
                    <PreviewDescription />
                    <PreviewEmployment />
                    <PreviewEducation /> 
                </section>
                <section className='preview_main_right'></section>
            </section>
        </section>
    );
};

export default Preview;