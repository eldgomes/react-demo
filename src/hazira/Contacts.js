import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons' 

import './Contacts.css';;

function Contacts (props) {
    return (
        <>
            <div className='contacts-container'>
                
                
                <div className='contacts-header'>Reach out to me at:</div>
                <a href="mailto:hazirashaikh85@gmail.com">
                    <div className='contact-text'>
                        <FontAwesomeIcon icon={faEnvelope} className='icon-class'/>
                        hazirashaikh85@gmail.com
                    </div>
                </a>
                <div className='contact-text'>
                    <FontAwesomeIcon icon={faPhone}  className='icon-class'/>
                    +91 9123456789
                </div>
                <a href={'https://facebook.com/Haziramakeupartistgoa/'} target="_blank">
                    <div className='contact-text'>
                        <FontAwesomeIcon icon={faFacebook}  className='icon-class'/>
                        Goa Makeup Artist Hazira
                    </div>
                </a>
                <a href={'https://instagram.com/goa_makeup_artist_hazira'} target="_blank">
                    <div className='contact-text'>
                        <FontAwesomeIcon icon={faInstagram}  className='icon-class'/>
                        Makeovers by Hazira
                    </div>
                </a>
            </div>
        </>
    );
}

export default Contacts;