import React from 'react';
import { useFormContext } from 'react-hook-form';
import '../../../styles/Main/Preview/PreviewEmployment.css'

const PreviewEmployment = () => {
    const { watch } = useFormContext();
    const { company, employmentCity, employmentFrom, employmentTo, position } = watch();

    const displayInformation = (value) => {
        if (value === '') return false;

        return true;
    };

    return (
        <section className='preview_employment'>
            <div className='employment_header'>
                <h3>Employment</h3>
                <hr />
            </div>
            <div className='employment_information'>
                <div>
                    <p>{`${displayInformation(employmentFrom) ? employmentFrom : 'Start Date'} - ${displayInformation(employmentTo) ? employmentTo : 'End Date'}`}</p>
                </div>
                <div>
                    <p>{displayInformation(position) ? position : 'Position'}</p>
                    <p>{displayInformation(company) ? company : 'Company'}</p>
                    <p>{displayInformation(employmentCity) ? employmentCity : 'City'}</p>
                </div>
            </div>
        </section>
    );
};

export default PreviewEmployment;