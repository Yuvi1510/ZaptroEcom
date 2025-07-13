import  { useEffect, useState } from 'react'
import {getData} from "../context/DataContext"
import FilterSection from '../components/FilterSection';
import loading from "../assets/loading4.webm";
import ProductCard from '../components/ProductCard';
import empty_cart from "../assets/empty-cart.png";
import Pagination from '../components/Pagination';



const Products = () => {

  const {data, fetchAllProducts} = getData();
 
   const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [brand, setBrand] = useState("All");
    const [priceRange, setPriceRange] = useState([0,5000]);
    const [page, setPage] = useState(1);

  useEffect(()=>{
    fetchAllProducts();
    
  },[]);


  const handleCategoryChange = (ev)=>{
      setCategory(ev.target.value);
      // console.log(ev.target.value);
    }
    
    const handleBrandChange = (ev)=>{
      setBrand(ev.target.value);
      // console.log(ev.target.value);
  }


  const pageHandler = (pageNumber) =>{
    setPage(pageNumber);
  }

  
  const filteredData = data?.filter((item)=>
    (item.title.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase())) &&
  (category === "All" || item["category"] === category) &&
  (brand === "All" || item["brand"] === brand) &&
  (item["price"] >= priceRange[0] && item["price"] <= priceRange[1])
)

const totalPage = Math.ceil(filteredData?.length / 8);
// useEffect(()=>{
//   totalPage= Math.ceil(filteredData?.length / 8)
// },[filteredData])


  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10'>
        {
            data?.length > 0?(
             <>
               <div className='flex gap-8'>
                <FilterSection search={search} setSearch={setSearch} category={category} setCategory={setCategory} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange} />
                {
                  filteredData?.length > 0 ? <div className='grid grid-cols-4 gap-7'>
                  {
                  filteredData?.slice(page*8 - 8, page*8).map((product, index)=>{
                    return <ProductCard product={product} key={index}/>
                  })
                }
                </div>
                : <video muted autoPlay loop>
                  <source src={empty_cart} type='video/webm' />
                </video>
                }
              </div>
              <Pagination pageHandler={pageHandler} page={page} totalPage={totalPage} />
             </>
            ):(
              <div className='flex items-center justify-center h-[400px]'>
                <video muted autoPlay loop>
                  <source src={loading} type='video/webm' />
                </video>
              </div>
            )
        }
        

      </div>
    </div>
  )
}

export default Products
