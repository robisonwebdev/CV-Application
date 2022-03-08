import React, { useState } from 'react';
import Button from './Button';
import Form from './Form/Form';
import Preview from './Preview/Preview';
import '../../styles/Main/Main.css';

const Main = () => {
    const [buttonText, setButtonText] = useState('Preview');
    const [showForm, setShowForm] = useState(true);
    const [showPreview, setShowPreview] = useState(false);

    const handleButton = () => {
        setShowForm(!showForm);
        setShowPreview(!showPreview);
        
        buttonText === 'Preview' ? setButtonText('Edit') : setButtonText('Preview');
    };

    return (
        <main>
            <div className='page_switch'>
                <Button handleButton={handleButton} text={buttonText} />
            </div>
            <section className='page_view'>
                {showForm ? <Form /> : null}
                {showPreview ? <Preview /> : null}
            </section>
        </main>
    );
};

export default Main;