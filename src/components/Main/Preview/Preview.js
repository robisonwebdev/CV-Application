import React from 'react';
import PreviewDescription from './PreviewDescription';
import PreviewEducation from './PreviewEducation';
import PreviewEmployment from './PreviewEmployment';
import PreviewHeader from './PreviewHeader';
import PreviewPersonalDetails from './PreviewPersonalDetails';
import '../../../styles/Main/Preview/Preview.css';

const Preview = () => {
    return (
        <section className='preview'>
            <PreviewHeader />
            <section className='preview_main'>
                <section className='preview_main_left'>
                    <PreviewDescription />
                    <PreviewEmployment />
                    <PreviewEducation /> 
                </section>
                <section className='preview_main_right'>
                    <PreviewPersonalDetails />
                </section>
            </section>
        </section>
    );
};

export default Preview;