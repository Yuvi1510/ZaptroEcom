import axios from "axios";
import { createContext, useContext, useState } from "react";

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

    // get only the categories 
     const getUniqueCategory = (data, property) =>{
        let newVal = data?.map((currentElement)=>{
            return currentElement[property];
        });

        return newVal;
    }

    const categoryOnlyData = ["All",...new Set(getUniqueCategory(data, 'category'))];
    const brandOnlyData = ["All",...new Set(getUniqueCategory(data, 'brand'))];

    return <DataContext.Provider value={{data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData}}>
        {children}
    </DataContext.Provider>
}

export const getData = ()=> useContext(DataContext);
