"use client";
import React, { useState } from "react";
import wholedata from "../data/results.json";
import "./styles.css"
export default function ImagesComp() {
  const [activeImage, setActiveImage] = useState(2); // Adjust initial image index if needed

  // Dynamically filtered data to show only 2 items
  const filteredData = wholedata.filter(
    (item) => item.id >= activeImage && item.id < activeImage + 2
  );

  const handlePrevious = () => {
    if (activeImage > 1) {
      setActiveImage(activeImage - 1);
    }
  };

  const handleNext = () => {
    if (activeImage < wholedata.length - 1) {
      setActiveImage(activeImage + 1);
    }
  };
  const setViewImage=(e)=>{
    const selectedItem=document.getElementById(e.target.id)
    selectedItem.classList.toggle("certificate")  
  }


  return (
    <section className="w-full flex flex-col items-center gap-6 p-5 pt-16">
      {/* Navigation Buttons */}
      <div className="flex justify-between w-full md:w-4/5 lg:w-3/5 items-center mb-4">
        <button
          className={`px-4 py-2 text-white font-bold rounded-lg transition ${
            activeImage <= 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={activeImage <= 1}
          onClick={handlePrevious}
        >
          ⬅️ Previous
        </button>
        <h1 className="text-center text-5xl font-bold capitalize text-orange-700">Our results</h1>
        <button
          className={`px-4 py-2 text-white font-bold rounded-lg transition ${
            activeImage >= wholedata.length - 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={activeImage >= wholedata.length - 1}
          onClick={handleNext}
        >
          Next ➡️
        </button>
      </div>

      {/* Image Cards */}
      <div className="flex flex-nowrap justify-center gap-6 w-full sm:w-11/12 md:w-4/5 lg:w-3/5">

        {filteredData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center rounded-lg bg-orange-100 bg-opacity-80 p-5 shadow-md hover:shadow-lg transition duration-300 w-full md:w-1/2"
          >
            {/* Image */}
            <img
            onClick={(e)=>setViewImage(e)}
              className={`w-full md:w-1/3 h-48 object-cover rounded-lg mb-5 md:mb-0 md:mr-5 transition-all duration-300 `}
              src={item.image}
              alt={item.name}
              id={item.id}
            />

            {/* Content */}
            <div className="w-full md:w-2/3 flex flex-col items-start">
              <h1 className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {item.id}
              </h1>
              <h2 className="text-base font-semibold bg-green-800 text-white py-1 px-3 rounded-lg mb-4">
                {item.name}
              </h2>
              <ol className="space-y-2 w-full">
                <li className="text-center py-3 px-2 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-red-500 rounded-lg shadow-sm hover:scale-105 transition">
                  Listening: {item.scores.Listening}
                </li>
                <li className="text-center py-3 px-2 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-red-500 rounded-lg shadow-sm hover:scale-105 transition">
                  Reading: {item.scores.Reading}
                </li>
                <li className="text-center py-3 px-2 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-red-500 rounded-lg shadow-sm hover:scale-105 transition">
                  Writing: {item.scores.Writing}
                </li>
                <li className="text-center py-3 px-2 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-red-500 rounded-lg shadow-sm hover:scale-105 transition">
                  Speaking: {item.scores.Speaking}
                </li>
              </ol>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full bg-transparent border-red-500 border-2 h-7"><div style={{"width":activeImage*11.11+"%"}} className={`bg-green-800`}>progress</div> </div>
    </section>
  );
}