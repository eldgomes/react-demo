import React from 'react';

import logo from '../images/hazira/logoMobile.jpg';

import './About.css';;

function About (props) {
    return (
        <>
            <div className='about-container'>
                <div className='about-item'>
                    <img src={logo} />
                </div>
            </div>
        </>
    );
}

export default About;