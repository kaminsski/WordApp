import React, { createContext, useEffect, useState } from 'react'

export const WordContext = createContext()
export default function WordProvider({children}) {
const[user,setUser]=useState(null)



useEffect(() => {
  const cookies = document.cookie
  if (cookies){const parse = JSON.parse(cookies.split("=")[1]) 
  setUser(parse)}
  


  
}, [])
const value = {
    user,
  
  };
  return (
    <WordContext.Provider value={value}>{children}</WordContext.Provider>

  )
}
