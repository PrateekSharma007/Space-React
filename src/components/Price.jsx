import React from 'react'
import "./Princing.css"

const Price = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3> - Basic - </h3>
                <p className='price'> 1 crore</p>
                <p> - views -</p>
                <p> - Top Selling -</p>
                <p> - Featured -</p>
                <p> - Bathroom Included - </p>
            </div>

            <div className='card'>
                <h3> - Standard - </h3>
                <p className='price'> - 1.5 crore - </p>
                <p> - views -</p>
                <p> - Top Selling -</p>
                <p> - Featured -</p>
                <p> - Bathroom Included - </p>
            </div>

            <div className='card'>
                <h3> - Rich - </h3>
                <p className='price'> - 4 crore - </p>
                <p> - views -</p>
                <p> - Top Selling -</p>
                <p> - Featured -</p>
                <p> - Bathroom Included - </p>
            </div>
        </div>

    </div>
  )
}

export default Price