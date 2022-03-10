import React from 'react';
import { useFormContext } from 'react-hook-form';
import '../../../styles/Main/Form/Education.css';

const Education = () => {
    const { register } = useFormContext();

    return (
        <section className='education'>
            <strong>Education</strong>
            <div>
                <input {...register('university')} placeholder='University' />
                <input {...register('educationCity')} placeholder='City' />
                <input {...register('degree')} placeholder='Degree' />
                <input {...register('educationFrom')} placeholder='From' />
                <input {...register('educationTo')} placeholder='To' />
            </div>
        </section>
    );
};

export default Education;