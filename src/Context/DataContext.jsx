import { createContext, useEffect, useState } from "react";

export const DataContext = createContext({})

const DataProvider = ({children}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const output = await fetch("http://localhost:8080/api/get")
                const response = await output.json()

                setData(response)
                setLoading(false)

            } catch (error) {
                console.error(error)
            }
            finally{
                setLoading(false)
            }
        }

        fetchData()
    }, [])
    
    
    
    return (
        <DataContext.Provider value={{data,loading}}>
            {children}
        </DataContext.Provider>
    )
}
export default DataProvider