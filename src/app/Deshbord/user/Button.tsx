"use client"
import React from 'react'
import { useRouter } from "next/navigation";


const Button = ({id}:any) => {
    const router = useRouter(); 

     const handleRouter = ()=>{
          router.push(`/Deshbord/user/Details/${id}`)
     }
  return (
    <div>
      <button className="w-full h-fulll bg-blue-700 rounded-md hover:border-white hover:border-2 visited:bg-gray-900 " onClick={handleRouter}>show</button>
    </div>
  )
}

export default Button
