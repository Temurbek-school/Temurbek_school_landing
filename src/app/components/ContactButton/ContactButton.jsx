"use client"
import { Button } from '@mui/material'
import React from 'react'
export const toggle_form=()=>{
  document.querySelector("#form_container").classList.toggle("hidden")
}
export default function ContactButton() {
  
  return (
    <Button onClick={()=>toggle_form()} variant='contained'>Leave Request</Button>
    
  )
}
