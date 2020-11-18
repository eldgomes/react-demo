import React from 'react';

//import dp from '../images/hazira/dp.jpg';
import dp2 from '../images/hazira/dp2.jpg';

import './About.css';;

function About (props) {
    return (
        <>
            <div className='about-container'>
                <div className='title'>Goa Makeup and Hair Artist Hazira</div>
                <div className='sub-title'>Makeovers by Hazira</div>
                <div className='about-item'>
                    <img className='dp' src={dp2} />
                </div>
                <div className='name'>Hazira Sheikh</div>
                <div className='about-me'>
                    Hazira Sheikh, a highly talented soul with a fine set of skills has been around in the makeup
                    industry for over 6 years and has gained much love from her clients and students. 
                    Her perfection, precision, and finesse has turned many to be wed beautiful women into stunning 
                    brides on their D-day. She has travelled across the globe spreading smiles and shimmer!!
                    She is on a mission to make the world a naturally beautiful place with the notion of encouraging and 
                    uplifting the young souls who share the same dream.
                </div>
            </div>
        </>
    );
}

export default About;