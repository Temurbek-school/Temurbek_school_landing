'use client';
import { useState, useRef } from "react";

export default function ImageSlider() {
  const images = [
    "assets/images/doppi.jpg",
    "assets/images/congrats.jpg",
    "assets/images/lpa1.jpg",
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

  const imagesPerSlide = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startPosition = useRef(0);
  const translate = useRef(0);
  const lastTranslate = useRef(0);

  const handleDragStart = (e) => {
    isDragging.current = true;
    startPosition.current = e.clientX || e.touches[0].clientX;
    containerRef.current.style.transition = "none"; // Disable smooth transition during drag
  };


  const handleDragMove = (e) => {
    if (!isDragging.current) return;

    const currentPosition = e.clientX || e.touches[0].clientX;
    translate.current = lastTranslate.current + currentPosition - startPosition.current;

    containerRef.current.style.transform = `translateX(${translate.current}px)`;
  };


  const handleDragEnd = () => {
    isDragging.current = false;
    const width = containerRef.current.offsetWidth / images.length;
    const movedBy = Math.round(translate.current / width);

    let newIndex = currentIndex - movedBy;
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= images.length - 1) newIndex = images.length - 1;

    setCurrentIndex(newIndex);
    lastTranslate.current = -newIndex * width;
    containerRef.current.style.transition = "transform 0.5s ease";
    containerRef.current.style.transform = `translateX(${lastTranslate.current}px)`;
  };


  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(images.length / imagesPerSlide)); 
  };


  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(images.length / imagesPerSlide)) % Math.ceil(images.length / imagesPerSlide)); 
  };

  return (
    <div className="bg-indigo-900 text-white py-8">

      <div className="text-center mb-4 relative z-10">
        <h2 className="bg-green-700 text-4xl font-bold tracking-wide rounded-lg uppercase shadow-md max-w-4xl mx-auto">Achievements</h2>
      </div>

      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">

        <div
          ref={containerRef}
          className="flex transition-all ease-in-out duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)`,
            width: `${Math.ceil(images.length / imagesPerSlide) * 100}%`, 
          }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {Array.from({ length: Math.ceil(images.length / imagesPerSlide) }).map((_, index) => (
            <div key={index} className="flex space-x-4">  {/* Add space between images */}
              {images.slice(index * imagesPerSlide, (index + 1) * imagesPerSlide).map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  src={image}
                  alt={`Slide ${index * imagesPerSlide + imageIndex + 1}`}
                  className="h-80 w-full md:h-96 object-cover rounded-lg shadow-xl"
                  style={{ marginRight: '10px', marginLeft: '10px' }} 
                />
              ))}
            </div>
          ))}
        </div>

        <div className="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 z-20 flex justify-between px-4">
          <button
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 rounded-full shadow-xl hover:bg-gradient-to-l transition-all duration-300"
            onClick={goToPrevious}
            aria-label="Previous Slide"
          >
            ‹
          </button>

          <button
            className="bg-gradient-to-l from-blue-500 to-teal-500 text-white p-4 rounded-full shadow-xl hover:bg-gradient-to-r transition-all duration-300"
            onClick={goToNext}
            aria-label="Next Slide"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
