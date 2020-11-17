import React from 'react';

import logo from '../images/hazira/logoMobile.jpg';

import './Header.css';;

function header (props) {
    return (
        <>
            <div className='header-container'>
                <div className='header-item'>
                    <img src={logo} />
                </div>
            </div>
        </>
    );
}

export default header;