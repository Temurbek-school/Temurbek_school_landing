"use client"
import React from 'react'

export default function EventsPage() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-indigo-950 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col lg:flex-row items-center mb-16">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold text-white mb-6">Biz bilan zavqlaning!</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
            TEMURBEK SCHOOLda ta'lim olishni qiziqarli va mazmunli tadbirlar bilan boyitamiz. 
            Seminarlar, interaktiv mashg'ulotlar, sport tadbirlari va jamoaviy o'yinlarda qatnashing, 
            unutilmas lahzalarga ega bo'ling!
            </p>
          </div>
          <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-64 h-64">
              <div className="absolute w-44 h-44 bg-cover bg-center rounded-full border-4 border-blue-800 shadow-md"
                style={{
                  backgroundImage: "url('assets/images/lesson.jpg')",
                  top: "",
                  left: "10px",
                }}
              ></div>
              <div className="absolute w-44 h-44 bg-cover bg-center rounded-full border-4 border-blue-800 shadow-md"
                style={{
                  backgroundImage: "url('assets/images/football.jpg')",
                  top: "60px",
                  left: "120px",
                }}
              ></div>
              <div className="absolute w-44 h-44 bg-cover bg-center rounded-full border-4 border-blue-800 shadow-md"
                style={{
                  backgroundImage: "url('assets/images/travel.jpg')",
                  top: "120px",
                  left: "0px",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="h-12 w-full bg-gradient-to-r from-blue-800 via-indigo-900 to-blue-800 mb-12 rounded-lg shadow-md"></div>


        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white">Tadbirlar</h3>
          <p className="text-gray-300 mt-2">
            O'zingizni rivojlantirish uchun kelajakdagi qiziqarli tadbirlarni kuting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-800 rounded-lg shadow-lg p-8 hover:bg-blue-700 transition-colors duration-300">
            <h4 className="text-2xl font-semibold text-white mb-4">IELTS Masterclass</h4>
            <p className="text-gray-300">
            IELTS tayyorligi uchun bilim va ko'nikmalaringizni oshiradigan maxsus seminarimizga qo'shiling. Ushbu tadbirda tajribali mutaxassislar maslahat berishadi va muvaffaqiyatga erishishning samarali usullarini o'rgatishadi. 
            </p>
            <span className="block mt-6 text-sm font-bold text-blue-200">O'tkazib yubormang!</span>
          </div>

          <div className="bg-blue-800 rounded-lg shadow-lg p-8 hover:bg-blue-700 transition-colors duration-300">
            <h4 className="text-2xl font-semibold text-white mb-4">Language Quiz Night</h4>
            <p className="text-gray-300">
            Til bilimingizni qiziqarli va interaktiv viktorina sessiyasida sinab ko'ring. Bu tadbir nafaqat bilimlaringizni sinash, balki yangi do'stlar orttirish uchun ajoyib imkoniyatdir.            </p>
            <span className="block mt-6 text-sm font-bold text-blue-200">Tafsilotlar yaqin kunlarda!!</span>
          </div>
        </div>
      </div>
    </section>
  );
}
