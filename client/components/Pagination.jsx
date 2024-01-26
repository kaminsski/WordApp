import React from 'react'

export default function Pagination({words, page, getAllWord}) {
    const startIndex = (page-1)*2
    const selectedWords = words && words.slice(startIndex, startIndex + 2)

    const deleteWord = async(id) =>{
        try {
            const response = await fetch(`http://localhost:7003/api/word/${id}`,{
                method:"DELETE",
    
            })
            if(response.ok){
                getAllWord()
                
            }
        } catch (error) {
            console.log(error);
        }
       
      }
  return (
    <>
      <div className="wordsContainer p-3 m-2 bg-white bg-opacity-75 col-10 col-md-6 mx-auto text-center">
<h1>Your Words</h1>
{selectedWords && selectedWords.length !== 0 ? (selectedWords.map((word) => (
    <div className='d-block d-md-flex justify-content-between px-5 bg-white rounded-5 my-1 position-relative' key={word._id}> 
      <span className='d-block d-md-inline mx-2'> {word.turkish} </span>
      <span className='mx-2'> {word.english} </span>
      <span className='position-absolute end-0 me-3 top-0'><i onClick={()=>deleteWord(word._id)} className="fa-solid fa-x text-danger"></i></span>
     </div>
))):((<h3>Please add your first word</h3>))}


</div>
    </>
  )
}
