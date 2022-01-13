import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg';


function Navbar() {
    return (
        <div className='top-nav'>
            <div className='wrapper'>
                <div>
                    <img src={logo} width={80} alt="logo" />
                </div>
                <span></span>
                <h2 className='text'>
                    <a href='#about'>
                        About
                    </a>
                </h2>
                <h2 className='text'>
                    <a href='#catalogue'>
                        Catalogue
                    </a>
                </h2>
                <h2 className='text'>
                <a href='#contact'>
                    Contact
                    </a>
                </h2>
            </div>
        </div>
    )
}

export default Navbar
