import React from 'react'
import items from './items.css'

const Items = (props) => {

  const displayName = props.name.length > 30 ? `${props.name.slice(0, 30)}...` : props.name;

  return (
    <div className='items'>
        <div className="img">
            <img src={props.img} alt="product_img" />

        </div>
        <div className="text-content">
            <p>{displayName}</p>
            <h5>${props.price}</h5>
        </div>
    </div>
  )
}

export default Items