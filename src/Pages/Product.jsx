import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import { useParams } from 'react-router-dom'
import product from './CSS/product.css'

const Product = () => {

  const { data } = useContext(DataContext)
  const { productId } = useParams();
  const product = data.data.find((item) => item.id === Number(productId))
  return (
    <div className='product'>
      <div className="left-part">
        <div className="small-img">
          <img src={product.img} alt='product_img' />
          <img src={product.img} alt='product_img' />
          <img src={product.img} alt='product_img' />
          <img src={product.img} alt='product_img' />
        </div>
        <div className="big-img">
          <img src={product.img} alt="product_img" />
        </div>

      </div>
      <div className="right-part">
        <h4>{product.name}</h4>
        <p>Special price</p>
        <h2>${product.price}</h2>
        <p>66,997 ratings and 4,278 reviews</p>
        <div className="size">
          <span>Size</span>
          <h3>S</h3>
          <h3>M</h3>
          <h3>L</h3>
          <h3>XL</h3>
          <h3>XLL</h3>
        </div>
        <div className="offers">
          <p>Bank Offer10% off on DBS Bank Credit Card Transactions, up to ₹2,000 on orders of ₹5,000 and aboveT&C</p>
        </div>
        <div className="btn">
          <button>ADD TO CART</button>
          <button>BUY NOW</button>
        </div>
      </div>



    </div>
  )
}

export default Product