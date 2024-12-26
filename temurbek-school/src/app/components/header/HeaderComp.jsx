"use client"
import Link from 'next/link'
import React, { useState } from 'react'

export default function HeaderComp() {
    const [mode,setMode]=useState()
    const handleMode=()=>{
        const HTML_do=document.querySelector("#HTML_item")
        HTML_do.classList.toggle("dark_mode")
        console.log(HTML_do)
        setMode(!mode)
        
    }


  return (
    <header className={`flex  w-full items-center justify-between rounded-md opacity-70 border-2 ${!mode? "border-white":"border-black"} p-4`}>
    
    <img src='/logo.jpg' className='w-10 h-10 rounded-md'></img>
    <Link href={"/"}>Home</Link>
    <Link href={"./../../courses"}  >Courses</Link>
    <Link href={"../../events"}>Events</Link>
    <Link href={"../../mocks"}>Mocks</Link>
    <div className='flex items-center justify-between w-20 '>
        <h1>Uz</h1> 
        <button onClick={()=>handleMode()}> {mode?"🌙":"🔆"}</button>
    </div>
    </header>
  )
}
