import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import './Socials.css'


function Socials() {
    return (
        <div className='socials'>
            <a href='https://www.instagram.com/supraja_heartworks/' 
            aria-label='instagram' 
            target="_blank" 
            rel="noreferrer">
                <FaInstagram size={24} />
            </a>
        </div>
    )
}

export default Socials
