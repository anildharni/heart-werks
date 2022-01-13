import React from 'react'
import { Navbar, Socials } from '../../Components'
import './Header.css'
import hoops from '../../assets/hoop1.jpeg';
import peacock from '../../assets/peacock.jpeg';


function Header() {
    return (
        <div id="about">
            <Navbar />
            <div className='header-wrapper'>
                <div className='hoops' >
                    <img
                        src={hoops}
                        alt="hoops"
                        className='img-hoops'
                    />
                </div>
                <div className='text-props'>
                    <h1>My Story</h1>
                    <h3>
                        As a woman I was always fascinated by the designs on clothes.
                        But it always bugged me when I am shopping for traditional indian wear.
                        Indian culture is very vibrant and colorful and I decided to take
                        bring this art into mainstream fashion. Along with custom made gift making,
                        we also make hoops with your loved ones on it.
                    </h3>
                </div>
                <div className='peacock'>
                    <img
                        src={peacock}
                        className='img-hoops'
                        alt="peacock" />
                </div>
                <div className='text-props'>
                    <h2>
                        A Gift is not just a cursory custom to be dealt with,
                        it is a marker of cherishing memories. Contact us for
                        custom handmade embroidary gifts
                    </h2>
                </div>
            </div>
            <Socials />
        </div >
    )
}

export default Header
