import React from 'react';
import { useFormContext } from 'react-hook-form';
import '../../../styles/Main/Preview/PreviewPersonalDetails.css';

const PreviewPersonalDetails = () => {
    const { watch } = useFormContext();
    const { city, email, phoneNumber, state, zipCode } = watch();

    const displayInformation = (value) => {
        if (value === '') return false;

        return true;
    };

    return (
        <section className='preview_personal_details'>
            <div className='personal_details'>
                <h3>Personal Details</h3>
                <hr />
            </div>
            <div className='address'>
                <h4>Address</h4>
                <p>{`${displayInformation(city) ? city : 'City'}, ${displayInformation(state) ? state : 'State'} ${displayInformation(zipCode) ? zipCode : 'Zip Code'}`}</p>
            </div>
            <div className='phone_number'>
                <h4>Phone Number</h4>
                <p>{`${displayInformation(phoneNumber) ? phoneNumber : 'xxx-xxx-xxxx'}`}</p>
            </div>
            <div className='email'>
                <h4>Email</h4>
                <p>{`${displayInformation(email) ? email : 'yourEmail@email.com'}`}</p>
            </div>
        </section>
    );
};

export default PreviewPersonalDetails;