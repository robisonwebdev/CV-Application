import React from 'react';
import { useFormContext } from 'react-hook-form';

const Preview = () => {
    const { watch } = useFormContext();

    return (
        <section className='preview'>
            <section className='preview_header'></section>
            <section className='preview_main'>
                <section className='preview_main_left'></section>
                <section className='preview_main_right'></section>
            </section>
        </section>
    );
};

export default Preview;