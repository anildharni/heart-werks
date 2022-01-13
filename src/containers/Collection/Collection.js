import React from 'react'
import './Collection.css'
import handmade from '../../assets/handmade.jpg';
import quality from '../../assets/quality.jpg';
import custommade from '../../assets/custommade.jpg';


function Collection() {
    return (
        <div className='collection-wrapper'>
            <div>
                <img
                    src={handmade}
                    className='img-hoops'
                    alt="Handmade"
                    longdesc='Image by <a href="https://pixabay.com/users/bluemorphos-1137133/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=942255">Anita Smith</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=942255">Pixabay</a>"'
                />
            </div>
            <div className='align-div'>
                <h1 className='headings'>
                    Handmade
                </h1>
                <h3 className='collection-text'>
                    Delicately handmade with love and care. The meticulous handiwork demands attention of
                    craftsman and will need upto 7 days to complete a craft.
                </h3>
            </div>
            <div className='align-div'>
                <h1 className='headings'>
                    Quality
                </h1>
                <h3 className='collection-text'>
                    We ensure 100% quality of the work we undertake and always strive for perfection
                    in what we do.
                </h3>
            </div>
            <div>
                <img
                    src={quality}
                    className='img-hoops'
                    alt="quality"
                    longdesc='Image by <a href="https://pixabay.com/users/geralt-9301/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3317496">Gerd Altmann</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3317496">Pixabay</a>'
                />
            </div>
            <div>
                <img
                    src={custommade}
                    className='img-hoops'
                    alt="custommade"
                    longdesc='Image by <a href="https://pixabay.com/users/spencerwing-4260422/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4061276">Spencer Wing</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4061276">Pixabay</a>'
                />
            </div>
            <div className='align-div'>
                <h1 className='headings'>
                    Personalisation
                </h1>
                <h3 className='collection-text'>
                    These gifts can be personalised. If you have a unique idea and want to see it come
                    to fruition, get in touch with us to explore the possibility.
                </h3>
            </div>
        </div>
    )
}

export default Collection
