
import React, { useContext, useEffect, useState } from 'react'
import Items from '../Items/Items'
import popular from './popular.css'
import { DataContext } from '../../Context/DataContext'

const Popular = () => {

    const {data,loading} = useContext(DataContext)


    if (loading) {
        return <p>loading...</p>
    }

    return (
        <div className='popular'>
            <h2>Popular Products</h2>
            <div className="showdata">
                {data.data.map((item, i) => {
                    if (item.category === 'popular') {
                        return <Items key={i} id={item.id} img={item.img} name={item.name} price={item.price} />
                    }

                })}
            </div>

        </div>
    )

}

export default Popular