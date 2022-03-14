import React from 'react';
import { useFormContext } from 'react-hook-form';
import '../../../styles/Main/Preview/PreviewEducation.css'

const PreviewEducation = () => {
    const { watch } = useFormContext();
    const { degree, educationCity, educationFrom, educationTo, university } = watch();

    const displayInformation = (value) => {
        if (value === '') return false;

        return true;
    };

    return (
        <section className='preview_education'>
            <h3>Education</h3>
            <hr />
            <div>
                <p>{`${displayInformation(educationFrom) ? educationFrom : 'Start Date'} - ${displayInformation(educationTo) ? educationTo : 'End Date'}`}</p>
                <div>
                    <p>{`${displayInformation(university) ? university : 'University'}, ${displayInformation(educationCity) ? educationCity : 'City'}`}</p>
                    <p>{`Degree: ${displayInformation(degree) ? degree : 'Degree'}`}</p>
                </div>
            </div>
        </section>
    );
};

export default PreviewEducation;