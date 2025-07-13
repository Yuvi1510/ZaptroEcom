import {  getData } from '../context/DataContext'

const Category = () => {
    const { categoryOnlyData} = getData();


  return (
    <div className='bg-[#101829]'>
      <div className='max-w-7xl mx-auto flex  items-center justify-around py-7 px-4'>
        {
            categoryOnlyData.map((category, index)=>{
                return <div key={index}>
                    <button className='uppercase btn-gradiend min-w-[100px]'>{category}</button>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default Category
