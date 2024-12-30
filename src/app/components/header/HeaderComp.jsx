"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ContactButton from '../ContactButton/ContactButton';
import "./responsive_header.css"
import { Button } from '@mui/material';
// TODO responsive
export default function HeaderComp() {
  const [mode, setMode] = useState(false);

  const handleMode = () => {
    const HTML_do = document.querySelector("#HTML_item");
    HTML_do.classList.toggle("light_mode");
    setMode(!mode);
  };

  // Animation variants
  const linkVariants = {
    hover: {
      scale: 1.25,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };


  const handleToglePie=()=>{
const header_links=document.getElementById("header_links")
header_links.classList.toggle("enabled")
  }



    

  return (
    <motion.header
      className="flex w-full items-center text-2xl justify-between rounded-md bg-gradient-to-tr from-fuchsia-800 to-blue-800 border-2 border-white p-4"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >

      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
        className="cursor-pointer"
      >
        
      <img src="/logo.jpg" className="w-10 h-10 rounded-md" alt="Logo" />
      </motion.div>

      <motion.div id='header_links' className={"flex items-center nav_links  justify-between w-3/5 "}>
        <motion.div className={"link_item"} variants={linkVariants} whileHover="hover">
          <Link href="/">Asosiy</Link>
        </motion.div>
        <motion.div className={"link_item"} variants={linkVariants} whileHover="hover">
          <Link href="/courses">Kurslar</Link>
        </motion.div>
        <motion.div className={"link_item"} variants={linkVariants} whileHover="hover">
          <Link href="/events">Tadbirlar</Link>
        </motion.div>
        <motion.div className={"link_item"} variants={linkVariants} whileHover="hover">
          <Link href="/mocks">Mock imtihonlar</Link>
        </motion.div>
      <div id='header_contact_part mt-5'><ContactButton  /></div>
      </motion.div>

      <Button variant='contained' id='header_contact_part' color='warning' className='btn'>Temurbek School</Button> 
      <button id='pie_toggler' variant='contained' onClick={()=>handleToglePie()} className='w-8  items-center hidden justify-center color-white bg-violet-600 rounded-md'><img src='/menu.svg'></img></button>
    </motion.header>
  );
}
