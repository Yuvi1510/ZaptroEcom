import {  getData } from '../context/DataContext'

const Category = () => {
    const {data} = getData();

    const getUniqueCategory = (data, property) =>{
        let newVal = data?.map((currentElement)=>{
            return currentElement[property];
        });

        return newVal;
    }

    const categoryOnlyData = [...new Set(getUniqueCategory(data, 'category'))];
    console.log(categoryOnlyData);

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
