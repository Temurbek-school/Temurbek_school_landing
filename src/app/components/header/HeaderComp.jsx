"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import ContactButton from '../ContactButton/ContactButton'

// TODO responsive
export default function HeaderComp() {
    const [mode,setMode]=useState()
    const handleMode=()=>{
        const HTML_do=document.querySelector("#HTML_item")
        HTML_do.classList.toggle("light_mode")
        console.log(HTML_do)
        setMode(!mode)
        
    }


  return (
    <header className={`flex  w-full items-center text-2xl justify-between rounded-md bg-gradient-to-tr from-fuchsia-800 to-blue-800  border-2 border-white p-4`}>
    
    <img src='/logo.jpg' className='w-10 h-10 rounded-md'></img>
    <Link className='hover:scale-125' href={"/"}>Home</Link>
    <Link className='hover:scale-125' href={"./../../courses"}  >Courses</Link>
    <Link className='hover:scale-125' href={"../../events"}>Events</Link>
    <Link className='hover:scale-125' href={"../../mocks"}>Mocks</Link>
    <ContactButton/>
    </header>
  )
}
