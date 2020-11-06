import React from 'react';
import Menu from './Menu';
import Header from './Header';
import PhotoGrid from './PhotoGrid';
import Footer from './Footer';

//this is actually redundant and needs to be removed

function Flexbox (props) {
    return (
        <>
            <Menu />
            <Header />
            <PhotoGrid />
            <Footer />
        </>
    );
}

export default Flexbox;