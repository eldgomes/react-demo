import React from 'react';

import dp from '../images/hazira/dp.jpg';

import './About.css';;

function About (props) {
    return (
        <>
            <div className='about-container'>
                <div className='about-item'>
                    <img className='dp' src={dp} />
                </div>
            </div>
        </>
    );
}

export default About;