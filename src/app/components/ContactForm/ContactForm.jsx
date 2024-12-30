"use client"
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { toggle_form } from '../ContactButton/ContactButton'
import coursesData from "../../courses/ctg.json"

export default function ContactForm() {
  const [mode,setMode]=useState()
  useEffect(() => {
    const htmlClasslist=document.querySelector("html").classList.contains("light_mode")
    console.log(htmlClasslist)
    setMode(htmlClasslist)
  }, [mode,setMode])
  
  return (
    <div id='form_container' className={`w-screen hidden  h-screen fixed top-0 bottom-0 left-0 right-0 overflow-y-hidden text-black bg-gradient-to-bl from-fuchsia-800 to-blue-800 flex items-center justify-center `}>

      <form method='POST' action="https://script.google.com/macros/s/AKfycbyezxjf9Prc6tu8aSW5MROPDo-tdBFx8_4x0dVbI5_LNmsziZtCUTZjpDlwfFCgdRLTfw/exec" className='w-72 rounded-lg bg-blue-700 flex flex-col  items-start justify-around h-96 p-5'>
      <div className='w-full flex items-center justify-between'>  <Button variant='contained' color='warning' className='btn'>Temurbek School</Button> <Button variant='contained' onClick={()=>toggle_form()} color='error'>X</Button></div>
        <label className='text-white'>Ismingizni kiriting:</label>
        <input placeholder='Ism' name='Name' type='text' className='w-full rounded-sm outline-orange-600 focus:bg-gray-500 focus:text-white pl-4 pr-4'/>
        <label className='text-white'>Familiyangizni kiriting:</label>
        <input placeholder='Familiya' name='Surname' type='text' className='w-full rounded-sm outline-orange-600 focus:bg-gray-500 focus:text-white pl-4 pr-4'/>
        <label className='text-white'>Telefon raqamingizni kiriting :</label>
        <input placeholder='Telefon raqam' name='Phone_number' type='text' className='w-full rounded-sm outline-orange-600 focus:bg-gray-500 focus:text-white pl-4 pr-4 '/>
        <label className='text-white'>Yoshingizni kiriting:</label>
        <input placeholder='Yosh' type='number' name='Age' className='w-full rounded-sm outline-orange-600 focus:bg-gray-500 focus:text-white pl-4 pr-4 mb-2'/>
        <label className='text-white'>Kursni tanlang:</label>
        <select  className='flex w-full item-center justify-center mb-2 outline-none rounded-sm'>
          <option  disabled value={null}>--Kursni tanlang--</option>
          {coursesData.kurslar.map((item,index)=><option key={index} className='w-full text-white bg-violet-800' value={item.nomi}>{index+1} {item.nomi}</option>)}
        </select>
        <Button variant='contained' type='submit'  color='secondary'>Yuborish</Button>
      </form>
    </div>
  )
}
