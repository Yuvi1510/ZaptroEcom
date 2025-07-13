import React from 'react'

const Pagination = ({page, pageHandler, totalPage}) => {

  return (
    <div className='mt-10 space-x-4 max-w-xl mx-auto flex justify-center'>
      <button disabled={page===1} className={`${page === 1? "bg-red-400" : "bg-red-500"} text-white px-3 py-1 rounded cursor-pointer`} >Prev</button>
      <button disabled={page===totalPage} className={`${page === totalPage? "bg-red-400" : "bg-red-500"} text-white px-3 py-1 rounded cursor-pointer`} >Next</button>
    </div>
  )
}

export default Pagination
