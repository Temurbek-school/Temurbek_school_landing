'use client'
import { useState, useEffect } from "react";
import ContactButton from '../components/ContactButton/ContactButton';

export default function MocksPage() {

  const images = [
    "/mock-image2.jpg",
    "/mock-image3.jpg",
    "/mock-image4.jpg",
    "/mock-image5.jpg",
    "/mock-image6.jpg",
    "/mock-image7.jpg",
    "/mock-image8.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Har 3 soniyada slayder avtomatik o'zgaradi
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <section className='flex items-center justify-between px-20 py-32'>
        <div>
          <h1 className='text-2xl'>TEMURBEK SCHOOLga xush kelibsiz!</h1>
          <p className='text-5xl my-5'>Biz bilan yangi cho'qqilarni <br />zabt eting!</p>
          <p className='mb-2'>Bizning tajribamiz va innovatsion yondashuvlarimiz yordamida o'z imkoniyatlaringizni yana bir bor <br />
            sinab ko'ring, yangi cho'qqilarni zabt eting va o'z oldingizga qo'ygan maqsadlarga yanada ishonch <br />
            bilan intiling. Har bir qadamda siz bilan birga bo'lamiz!</p>
          <ContactButton />
        </div>
        <img src="/mock-image1.jpg" alt="" width={500} className='rounded-3xl' />
      </section>

      <section className="flex px-20 py-32'">
        <p className='text-2xl'>Mock Exam Atmosphere</p>
        <div className="flex items-center justify-center h-screen">
          <div className="relative scale-150 w-full max-w-4xl overflow-hidden">
            {/* Slider images */}
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              ))}
            </div>

            {/* Previous button */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
              onClick={goToPrevious}
            >
              ‹
            </button>

            {/* Next button */}
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
              onClick={goToNext}
            >
              ›
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"
                    }`}
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-20 py-32'">
        <p className="mb-5">🚀Nima uchun aynan TEMURBEK SCHOOL ni tanlashingiz kerak?🚀</p>
        <div className="flex flex-wrap items-center justify-center gap-5">

          <div className="flex flex-col justify-start rounded-2xl w-96 h-40 p-4 border border-slate-500">
            <h1 className="text-xl mb-1">Haqiqiy IELTS imtihoni atmosferasi</h1>
            <p className="text-gray-400">IELTS ZONE siz uchun haqiqiy IELTS imtihon
            atmosferasini yaratadi. Candidatelar doimiy kuzatib
            turuvchi nazoratchilar ko'z ostida boladi.</p>
          </div>

          <div className="flex flex-col justify-start rounded-2xl w-96 h-40 p-4 border border-slate-500">
            <h1 className="text-xl mb-1">Real examda tushgan va tushish ehtimoli yuqori bo'lgan materiallar</h1>
            <p className="text-gray-400">O'quvchilar haqiqiy IELTS imtihonida
            tushgan va tushish ehtimoli yuqori bo'lgan
            materiallarni bajaradi.</p>
          </div>

          <div className="flex flex-col justify-start rounded-2xl w-96 h-40 p-4 border border-slate-500">
            <h1 className="text-xl mb-1">WRITINGdan yuqori ballga ega examiner'lar</h1>
            <p className="text-gray-400">Writinglarni IELTS imtihonidan yuqori ball
            olgan, ko'p yillik tajribaga ega
            examinerlar baholaydi.</p>
          </div>

          <div className="flex flex-col justify-start rounded-2xl w-96 h-40 p-4 border border-slate-500">
            <h1 className="text-xl mb-1">Listening uchun quloqchinlar</h1>
            <p className="text-gray-400">Har bir o'quvchi haqiqiy IELTS
            imtihonidek zamonaviy quloqchinlar
            bilan ta'minlanadi.</p>
          </div>

          <div className="flex flex-col justify-start rounded-2xl w-96 h-40 p-4 border border-slate-500">
            <h1 className="text-xl mb-1">SPEAKING uchun yuqori darajadagi examiner'lar</h1>
            <p className="text-gray-400">Speakingdan imtihonni IELTS
            imtihonidan yuqori ball olgan, ko'p yillik
            tajribaga ega examinerlar oladi.</p>
          </div>

          <div className="flex flex-col justify-start rounded-2xl w-96 h-40 p-4 border border-slate-500">
            <h1 className="text-xl mb-1">Individual Feedback folder</h1>
            <p className="text-gray-400">mtihondan keyin har bir o'quvchi
            har bir sectiondan examineralardan
            Feedback Folderga ega bo'ladi.</p>
          </div>
        </div>
      </section>
    </div>
    // TODO info about Mock Exams- Ibrohim
  )
}
