import React, { useContext, useState } from 'react'
import { getData } from '../context/DataContext'

const FilterSection = ({search, setSearch, category, setCategory, brand, setBrand , priceRange, setPriceRange, handleBrandChange, handleCategoryChange}) => {

    const {categoryOnlyData, brandOnlyData} = getData();
    

  return (
    <div className='bg-gray-100 mt-10 p-4 rounded-md h-max'>
        <input onChange={(ev)=> setSearch(ev.target.value)} value={search} type="text" placeholder='search...' className='bg-white p-2 rounded-md border-gray-400 border-2' />

        {/* category only data  */}
        <h1 className='mt-5 font-semibold text-xl'>Category</h1>
        <div className='flex flex-col gap-2 mt-3'>
            {
                categoryOnlyData?.map((item, index)=>{
                    return <div key={index} className='flex gap-2'>
                        <input  type="checkbox" name={item} id=""  checked={category === item} value={item} onChange={handleCategoryChange} />
                        <button className='cursor-pointer uppercase'>{item}</button>
                    </div>
                })
            }
        </div>

        {/* brand only data  */}
        <h1 className='mt-5 mb-3 font-semibold text-xl'>Brand</h1>
        <div className='flex flex-col gap-2 mt-3'>
            <select onChange={handleBrandChange} value={brand} name="" id="" className='bg-white p-2 rounded-md border-gray-400 border-2'>
                {
                brandOnlyData?.map((item, index)=>{
                    return <option key={index} value={item} >{item.toUpperCase()}</option>
                })
            }
            </select>
        </div>

        {/* price range  */}
        <h1 className='mt-5 mb-3 font-semibold text-xl'>Price Range</h1>
        <div className='flex flex-col gap-2 mt-3'>
            <label htmlFor="" className='w-max'>Price Range: Rs.{priceRange[0]} - Rs.{priceRange[1]}</label>
            <input type="range" min={0} max={5000} name="" id="" value={priceRange[1]} onChange={(ev)=> setPriceRange([priceRange[0], Number(ev.target.value)])} />
        </div>

        <button onClick={()=>{setSearch(""); setBrand("All"); setCategory("All"); setPriceRange([0, 5000])}} className='bg-red-500 text-white rounded-md px-3 py-1 mt-5 cursor-pointer'>Reset Filters</button>
        

    </div>
  )
}

export default FilterSection
