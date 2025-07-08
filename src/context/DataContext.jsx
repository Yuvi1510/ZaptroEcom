import axios from "axios";
import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({children})=>{
    const [data, setData] = useState();

    //fetch all products from api
    const fetchAllProducts = async()=>{
        try {
            const response = await axios.get("https://fakestoreapi.in/api/products?limit=150");
            const productData = response.data.products;
            setData(productData);
            
        } catch (error) {
            console.log(error);
        }
    }

    return <DataContext.Provider value={{data, setData, fetchAllProducts}}>
        {children}
    </DataContext.Provider>
}
