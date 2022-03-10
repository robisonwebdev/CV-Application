import React from 'react';
import { useFormContext } from 'react-hook-form';
import '../../../styles/Main/Form/Employment.css';

const Employment = () => {
    const { register } = useFormContext();

    return (
        <section className='employment'>
            <strong>Employment</strong>
            <div>
                <input {...register('position')} placeholder='Position' />
                <input {...register('company')} placeholder='Company' />
                <input {...register('employmentCity')} placeholder='City' />
                <input {...register('employmentFrom')} placeholder='From' />
                <input {...register('employmentTo')} placeholder='To' />
            </div> 
        </section>
    );
};

export default Employment;