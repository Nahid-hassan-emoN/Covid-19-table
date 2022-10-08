import React from 'react';


const Footer = () => {
    const years = new Date().getFullYear();
    return (
        <div className='footer'>
            <p> copyright © {years}</p>
        </div>
    );
};

export default Footer;