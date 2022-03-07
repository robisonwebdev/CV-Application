import React from 'react';

const Button = ({ handleButton, text }) => {
    return (
        <button onClick={handleButton}>{text}</button>
    );
};

export default Button;