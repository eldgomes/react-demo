import React from 'react';

import dp from '../images/hazira/dp.jpg';

import './About.css';;

function About (props) {
    return (
        <>
            <div className='about-container'>
                <div className='title'>Goa Makeup &amp; Artist Hazira</div>
                <div className='sub-title'>Goa Makeup &amp; Artist Hazira</div>
                <div className='about-item'>
                    <img className='dp' src={dp} />
                </div>
                <div className='name'>Hazira Shaikh</div>
                <div className='about-me'>
                    About me: Please write some content about you and ping me on watsapp.
                    It could be anything relevant to what you do. Right now this is just placeholder text.
                    3-4 lines should be perfect. Planning to roll out the first version before end of this week.
                    Also send me a picture of you to be used here. 
                    Also, let me know if there's anything specific you need for the first version.
                </div>
            </div>
        </>
    );
}

export default About;