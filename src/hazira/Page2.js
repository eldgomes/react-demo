import React from 'react';

import logo from '../images/hazira/logo.jpeg';
import one from '../images/hazira/one.jpg';
import two from '../images/hazira/two.jpg';
import three from '../images/hazira/three.jpg';
import four from '../images/hazira/four.jpg';
import five from '../images/hazira/five.jpg';
import dp from '../images/hazira/dp.jpg';

import Menu from './Menu';
import Header from './Header';
import About from './About';
import PhotoGrid from './PhotoGrid';
import Contacts from './Contacts';
import Footer from './Footer';

import './Page2.css';;

function Page2 (props) {
    return (
        <>
            <div className='page2'>
                <About />
                <PhotoGrid />
                <Contacts />
                <Footer />
            </div>
        </>
    );
}

export default Page2;