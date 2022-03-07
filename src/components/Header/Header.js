import React from 'react';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import '../../styles/Header/Header.css';

const Header = () => {
    return (
        <header>
            <ContactPageOutlinedIcon sx={{ fontSize: 50}} />
            <strong>CV Builder</strong>
        </header>
    );
};

export default Header;