import React from 'react';
import '../../styles/Main/Button.css';

const Button = ({ handleButton, text }) => {
    return (
        <button onClick={handleButton}>{text}</button>
    );
};

export default Button;