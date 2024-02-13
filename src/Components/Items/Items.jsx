import React from 'react'
import items from './items.css'

const Items = (props) => {
  return (
    <div className='items'>
        <div className="img">
            <img src={props.img} alt="product_img" />

        </div>
        <div className="text-content">
            <h3>{props.name}</h3>
            <h2>{props.price}</h2>
        </div>
    </div>
  )
}

export default Items