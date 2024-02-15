import React, { useContext } from 'react'
import shopCategory from './CSS/shopCategory.css'
import Items from '../Components/Items/Items'
import { DataContext } from '../Context/DataContext'


const ShopCategory = (props) => {
  const {data} = useContext(DataContext)

  return (
    <div>
      <div className="banner">
        <img src={props.banner} alt="" />
      </div>
      <div className="products">
        {data.data.map((item, i) => {
          if (item.category === props.category) {
              return <Items key={i} 
                img={item.img}
                name={item.name}
                price={item.price}
              />
          }
        })}
      </div>

    </div>
  )
}

export default ShopCategory