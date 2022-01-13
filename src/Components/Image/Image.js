import React from 'react'
import './Image.css'
import hoops from '../../assets/hoop2.jpeg';
import papa from '../../assets/papa.jpeg';



function Image() {
    return (
        <div className='align' id="catalogue">
            <div>
                <img
                    src={hoops}
                    className='img-hoops'
                    alt="hoops" />
            </div>
            <div className='title'>
                <h1>
                    Handmade embroidary on cloth hoops
                </h1>
                <h3>
                    These hoops are made using cloth and handmade for 14 days.
                    These hoops are made using cloth and handmade for 14 days.
                </h3>
                <div className='price-contact'>
                    <button className='spacing'>
                        <a href='https://www.instagram.com/supraja_heartworks/'>
                            Contact Us on Instagram
                        </a>
                    </button>
                    <h2 className='spacing'>
                    Price: ₹1200
                    </h2>
                </div>
            </div>

            
            <div className='title' >
                <h1>
                    Tanjore Paintings on Cloth materials
                </h1>
                <h3>
                    These Tanjore Paintings are made using cloth and handmade for 14 days.
                    These Tanjore Paintings are made using cloth and handmade for 14 days.
                </h3>
                <div className='price-contact'>
                    <button className='spacing'>
                        <a href='https://www.instagram.com/supraja_heartworks/'>
                            Contact Us on Instagram
                        </a>
                    </button>
                    <h2 className='spacing'>
                    Price: ₹1200
                    </h2>
                </div>
            </div>
            <div>
                <img
                    src={papa}
                    className='img-hoops-papa'
                    alt="papa" 
                    />
            </div>
        </div>
    )
}

export default Image
