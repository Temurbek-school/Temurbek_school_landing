"use client"
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { toggle_form } from '../ContactButton/ContactButton'

export default function ContactForm() {
  const [mode,setMode]=useState()
  useEffect(() => {
    const htmlClasslist=document.querySelector("html").classList.contains("light_mode")
    console.log(htmlClasslist)
    setMode(htmlClasslist)
  }, [mode,setMode])
  
  return (
    <div id='form_container' className={`w-screen hidden  h-screen fixed top-0 bottom-0 left-0 right-0 overflow-y-hidden text-black ${mode?"bg-white":"bg-black"} flex items-center justify-center `}>

      <form className='w-72 rounded-lg bg-blue-950 flex flex-col  items-start justify-around h-72 p-5'>
      <div className='w-full flex items-center justify-between'>  <Button variant='outlined' className='btn'>Temurbek School</Button> <Button onClick={()=>toggle_form()} color='warning'>X</Button></div>
        <label className='text-white'>Enter your name:</label>
        <input type='text' className='w-full pl-4 pr-4'/>
        <label className='text-white'>Enter your surname:</label>
        <input type='text' className='w-full pl-4 pr-4'/>
        <label className='text-white'>Enter your phone number:</label>
        <input type='text' className='w-full pl-4 pr-4 '/>
        <label className='text-white'>Enter your phone age:</label>
        <input type='number' className='w-full pl-4 pr-4 '/>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}
