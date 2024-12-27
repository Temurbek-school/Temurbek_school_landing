"use client";
import React, { useState } from "react";
import testimonials from "../../data/testimonials.json";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsPerPage = 3;

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + testimonialsPerPage >= testimonials.length
        ? 0
        : prevIndex + testimonialsPerPage
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - testimonialsPerPage < 0
        ? testimonials.length - testimonialsPerPage
        : prevIndex - testimonialsPerPage
    );
  };

  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-white dark:text-black">
        Ba'zi o'quvchilarimizning fikrlari
      </h2>
      <div className="relative">
        <div className="flex overflow-hidden transition-all duration-500 ease-in-out">
          {testimonials
            .slice(currentIndex, currentIndex + testimonialsPerPage)
            .map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full sm:w-1/3 px-4"
              >
                <div className="bg-gradient-to-r dark:from-blue-800 dark:via-indigo-900 dark:to-blue-950 from-blue-700 via-indigo-800 to-blue-900 p-6 rounded-lg shadow-xl text-center transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s photo`}
                    className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-white shadow-md"
                  />
                  <h3 className="font-semibold text-xl text-white">{testimonial.name}</h3>
                  <p className="text-white italic my-2">{testimonial.text}</p>
                </div>
              </div>
            ))}
        </div>

        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          onClick={prevTestimonial}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          onClick={nextTestimonial}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}