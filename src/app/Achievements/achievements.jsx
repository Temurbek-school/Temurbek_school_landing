'use client';

import { useState } from "react";

export default function ImageSlider() {

  
  const imageCount=3
  const images = [
    "assets/images/doppi.jpg",
    "assets/images/congrats.jpg",
    "assets/images/medal.jpg",
    "assets/images/hippost.jpg",
    "assets/images/hall_hippo.jpg",
    "assets/images/lpa2.jpg",
    "assets/images/hippo1.jpg",
    "assets/images/hippo2.jpg",
    "assets/images/hippoflag.jpg",
    "assets/images/lpa_lesson.jpg",
    "assets/images/lpa_all.jpg",
    "assets/images/hippo_all.jpg",
  ];
  const [imageNumber,setImageNumber]=useState(0)
  const [displayImages,setDisplayImages]=useState([images[imageNumber],images[imageNumber+1]])



  const filterimages=()=>{

    const image1=document.getElementById("0")
    const image2=document.getElementById("1")
   image1.src=images[imageNumber+1]
   image2.src=images[imageNumber+2]
   setImageNumber(imageNumber+2)
  }
  
  const filterPrevious=()=>{
    const image1=document.getElementById("0")
    const image2=document.getElementById("1")
   image1.src=images[imageNumber-11]
   image2.src=images[imageNumber-2]
   setImageNumber(imageNumber-2)
  }


  return (
    <div className="bg-indigo-900 text-white py-8 w-full">

      <div className="text-center mb-4 relative z-10">
        <h2 className="bg-green-700 text-4xl font-bold tracking-wide rounded-lg uppercase shadow-md max-w-4xl mx-auto">Achievements</h2>
      </div>

      <div className="relative w-full flex flex-wrap items-center justify-around">
{displayImages.map((item,index)=><img id={index} key={index} className=" h-96" src={item}/>)}

<button className="absolute top-1/2 text-3xl left-0" disabled={imageNumber<2} onClick={()=>filterPrevious()}>⬅️</button>
<button className="absolute top-1/2 text-3xl right-0" disabled={imageNumber>10} onClick={()=>filterimages()}>➡️</button>
      
      </div>
    </div>
  );
}
