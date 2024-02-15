import React from 'react'
import items from './items.css'
import { Link } from 'react-router-dom';

const Items = (props) => {

  const displayName = props.name.length > 30 ? `${props.name.slice(0, 30)}...` : props.name;
  
  return (
    <div className='items'>
        <Link to = {`/product/${props.id}`} >
        <div className="img">
            <img src={props.img} alt="product_img" />

        </div>
        <div className="text-content">
            <p>{displayName}</p>
            <h5>${props.price}</h5>
        </div>
        </Link>
    </div>
  )
}

export default Items