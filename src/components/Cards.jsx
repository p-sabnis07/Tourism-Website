import React, { useState } from 'react'

const Cards = ({id, image, info, price, name, removeTour}) => {
    // here we made a flag for read more and show less behaviour 
    const [readmore, setReadmore] = useState(false);

    // on the basis of above hook we set here the logic of read more and read less behaviour
    const description = readmore ? info : `${info.substring(0,200)}....`

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className='card'>
            <img src={image} alt="" className='image' />
            <div className='tour-info'>
                <div className='tour-details'>
                    <h4 className='tour-price'>{price}</h4>
                    <h4 className='tour-name'>{name}</h4>
                </div>
                <div className='description'>
                    {description}
                    <span className='read-more' onClick={readmoreHandler}>
                        {/* if readmore is true then show.. 'show less' if it is false then show... 'show more' */}
                        {readmore ? `Show less` : `Read more`}
                    </span>
                </div>
                <button className='btn-red' onClick={() => removeTour(id)}>Not Interested</button>
             </div>
        </div>
  )
};

export default Cards;