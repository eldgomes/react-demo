import React from 'react';

import logo from '../images/hazira/logo.jpeg';
import one from '../images/hazira/one.jpg';
import two from '../images/hazira/two.jpg';
import three from '../images/hazira/three.jpg';
import four from '../images/hazira/four.jpg';
import five from '../images/hazira/five.jpg';
import dp from '../images/hazira/dp.jpg';

import './Page.css';;

function Page (props) {
    return (
        <>
            <div className='page'>
                <div class='section menu'>Makeovers by Hazira</div>
                <div class='section logo'>
                    <img src={logo}/>
                </div>
                <div class='section about'>
                    <div className='about-header'>Goa Makeup &amp; Artist Hazira</div>
                    <div className='about-subtext'>Hair &amp; makeup artist</div>
                    <div className='about-image'>
                        <img src={dp} />
                    </div>
                    <div className='about-name'>HAZIRA SHAIKH</div>
                    <div className='about-content'>We like doing makeup and stuff...</div>
                </div>
                <div class='section portfolio-header'>Checkout our work...</div>
                <div class='section portfolio'>
                    <div className='wrapper'>
                        <img className='pic' src={one}/>
                    </div>
                </div>  
                <div class='section portfolio'>  
                    <div className='wrapper'>
                        <img className='pic' src={two}/>
                    </div>
                </div>
                <div class='section portfolio'>   
                    <div className='wrapper'>
                        <img className='pic' src={three}/>
                    </div>
                </div>
                <div class='section portfolio'>  
                    <div className='wrapper'>
                        <img className='pic' src={four}/>
                    </div>
                </div>
                <div class='section portfolio'>  
                    <div className='wrapper'>
                        <img className='pic' src={five}/>
                    </div>
                </div>
                <div class='section portfolio-footer'>... and more to follow.</div>
                <div className='section contact'>
                    <div className='contact-header'>Reach out to us at:</div>
                    <div className='contact-detail'>hazirashaikh85@gmail.com</div>
                    <div className='contact-detail'>+91 9123456789</div>
                    <div className='contact-detail'>facebook.com/Haziramakeupartistgoa/</div>
                    <div className='contact-detail'>instagram.com/goa_makeup_artist_hazira/</div>
                </div>
                <div class='section footer'>&#169; 2020 Makeovers by Hazira</div>
            </div>
        </>
    );
}

export default Page;