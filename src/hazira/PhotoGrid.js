import React from 'react';

import one from '../images/hazira/oneMobile.jpg';
import two from '../images/hazira/twoMobile.jpg';
import three from '../images/hazira/threeMobile.jpg';
import four from '../images/hazira/fourMobile.jpg';
import five from '../images/hazira/fiveMobile.jpg';

import './PhotoGrid.css';;

function PhotoGrid (props) {
    return (
        <>
            <div className='photo-grid-container'>
                <div className='photo-grid-item'>
                    <div className='grid-text'>
                        Portfolio
                    </div>
                    <div className='img-wrapper'>
                        <img className='pic' src={one}/>
                    </div>
                    <div className='img-wrapper'>
                        <img className='pic' src={two}/>
                    </div>
                    <div className='img-wrapper'>
                        <img className='pic' src={three}/>
                    </div>
                    <div className='img-wrapper'>
                        <img className='pic' src={four}/>
                    </div>
                    <div className='img-wrapper'>
                        <img className='pic' src={five}/>
                    </div>         
                    <div className='grid-text'>
                        ...and more to follow. In the meantime feel free to check more on my <a href={'https://instagram.com/goa_makeup_artist_hazira'} target="_blank">Instagram</a> page.
                    </div>           
                </div>
            </div>
        </>
    );
}

export default PhotoGrid;