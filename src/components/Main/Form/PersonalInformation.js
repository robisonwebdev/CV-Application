import React from 'react';
import { useFormContext } from 'react-hook-form';
import '../../../styles/Main/Form/PersonalInformation.css';

const PersonalInformation = () => {
    const { register } = useFormContext();

    return (
        <section className='personal_information'>
            <strong>Personal Information</strong>
            <div>
                <input {...register('firstName')} placeholder='First Name' />
                <input {...register('lastName')} placeholder='Last Name' />
                <input {...register('title')} placeholder='Title' />
                <input {...register('city')} placeholder='City' />
                <input {...register('state')} placeholder='State' />
                <input {...register('zipCode')} placeholder='Zip Code' />
                <input {...register('phoneNumber')} placeholder='Phone Number' />
                <input {...register('email')} placeholder='Email' />
                <textarea {...register('description')} placeholder='Description' />
            </div>
        </section>
    );
};

export default PersonalInformation;