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
    <div id='form_container' className={`w-screen hidden  h-screen fixed top-0 bottom-0 left-0 right-0 overflow-y-hidden text-black ${mode?"bg-white":"bg-blue-950"} flex items-center justify-center `}>

      <form method='POST' action="https://script.google.com/macros/s/AKfycbyezxjf9Prc6tu8aSW5MROPDo-tdBFx8_4x0dVbI5_LNmsziZtCUTZjpDlwfFCgdRLTfw/exec" className='w-72 rounded-lg bg-blue-700 flex flex-col  items-start justify-around h-80 p-5'>
      <div className='w-full flex items-center justify-between'>  <Button variant='contained' color='warning' className='btn'>Temurbek School</Button> <Button onClick={()=>toggle_form()} color='warning'>X</Button></div>
        <label className='text-white'>Enter your name:</label>
        <input placeholder='Name' name='Name' type='text' className='w-full rounded-sm outline-orange-600 focus:bg-gray-500 focus:text-white pl-4 pr-4'/>
        <label className='text-white'>Enter your surname:</label>
        <input placeholder='Surname' name='Surname' type='text' className='w-full rounded-sm outline-orange-600 focus:bg-gray-500 focus:text-white pl-4 pr-4'/>
        <label className='text-white'>Enter your phone number:</label>
        <input placeholder='Phone Number' name='Phone_number' type='text' className='w-full rounded-sm outline-orange-600 focus:bg-gray-500 focus:text-white pl-4 pr-4 '/>
        <label className='text-white'>Enter your age:</label>
        <input placeholder='Age' type='number' name='Age' className='w-full rounded-sm outline-orange-600 focus:bg-gray-500 focus:text-white pl-4 pr-4 mb-2'/>
        <Button variant='contained' type='submit'  color='secondary'>Submit</Button>
      </form>
    </div>
  )
}
