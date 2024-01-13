import React from 'react'
import Cards from './Cards';

// here we pass the props 
const Tours = ({tours, removeTour}) => {
  return (
    <div className='container'>
        <div>
            <h2 className='title'>Tours and Tourism</h2>
        </div>
        <div className='cards'>
        {/* We take all the data which is in the form of array from data.js file by using map function by using spread operator and then we pass the props of removeTour function  */}
            {
                tours.map((tour) => {
                    return <Cards key={tour.id} {...tour} removeTour={removeTour} />
                })
            }
        </div>
    </div>
  )
}

export default Tours;