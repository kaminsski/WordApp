import React from 'react'

export default function PaginationBar({totalPages,handlePage}) {
    const pages = [...Array(totalPages).keys()].map(num => num+1)
  return (
    <>
      <div className='d-flex justify-content-center mt-3'>
        {pages.map((num)=>
            <button className='mx-1' onClick={()=>{handlePage(num)}} key={num}> {num} </button>
        )}
      </div>
    </>
  )
}