import React from 'react';

import './Contacts.css';;

function Contacts (props) {
    return (
        <>
            <div className='contacts-container'>
                <div className='contacts-header'>Reach out to us at:</div>
                <div className='contact-text'>hazirashaikh85@gmail.com</div>
                <div className='contact-text'>+91 9123456789</div>
                <div className='contact-text'>facebook.com/Haziramakeupartistgoa/</div>
                <div className='contact-text'>instagram.com/goa_makeup_artist_hazira/</div>
            </div>
        </>
    );
}

export default Contacts;