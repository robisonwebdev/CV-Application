import React, { useState } from 'react';
import Button from './Button';
import '../../styles/Main/Main.css';

const Main = () => {
    const [buttonText, setButtonText] = useState('Preview');
    const [showForm, setShowForm] = useState(true);
    const [showPreview, setShowPreview] = useState(false);

    const handleButton = () => {
        setShowForm(!showForm);
        setShowPreview(!showPreview);
        
        {buttonText === 'Preview' ? setButtonText('Edit') : setButtonText('Preview')}
    };

    return (
        <main>
            <div className='view_switch'>
                <Button handleButton={handleButton} text={buttonText} />
            </div>
            <section>
                
            </section>
        </main>
    );
};

export default Main;