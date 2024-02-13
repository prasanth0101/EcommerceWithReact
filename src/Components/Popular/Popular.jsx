import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Items from '../Items/Items'

const Popular = () => {

    const [data,setData] = useState(null)
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{

        const fetchData = async ()=>{
            try {
                const responce = await axios.get("http://localhost:8080/api/get-by-category/popular");
                setData(responce.data)

            } catch (error) {
                console.error(error)
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchData()

    },[])

    

  return (
    <div className='popular'>
        {isLoading ? <p> loading..</p>:(

            <div className="showdata">
                <h1>hi</h1>
            </div>
        )}

    </div>
  )
}

export default Popular