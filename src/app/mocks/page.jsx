'use client';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ContactButton from '../components/ContactButton/ContactButton';

export default function MocksPage() {
  const images = [
    "/mock-image2.jpg",
    "/mock-image3.jpg",
    "/mock-image4.jpg",
    "/mock-image5.jpg",
    "/mock-image6.jpg",
    "/mock-image7.jpg",
    "/mock-image8.jpg",
    "/mock-image9.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change every 3 seconds
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
      <motion.section
        className="flex flex-col lg:flex-row items-center justify-between px-5 lg:px-20 py-16 lg:py-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center lg:text-left w-auto lg:w-3/5">
          <h1 className="text-xl lg:text-2xl">Temurbek School ga xush kelibsiz!</h1>
          <p className="text-3xl lg:text-5xl my-5">Biz bilan yangi cho'qqilarni <br /> zabt eting!</p>
          <p className="mb-4 text-sm lg:text-base">
            Bizning tajribamiz va innovatsion yondashuvlarimiz yordamida o'z imkoniyatlaringizni yana bir bor
            sinab ko'ring, yangi cho'qqilarni zabt eting va o'z oldingizga qo'ygan maqsadlarga yanada ishonch
            bilan intiling. Har bir qadamda siz bilan birga bo'lamiz!
          </p>
          <ContactButton />
        </div>
        <motion.img
          src="/mock-image1.jpg"
          alt="Welcome"
          width={500}
          className="rounded-3xl mt-8 lg:mt-0 w-full max-w-sm lg:max-w-md"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.section>

      <motion.section
        className="px-5 lg:px-20 py-16 lg:scroll-py-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <p className="text-xl lg:text-2xl text-center lg:text-left">Mock Exam Atmosphere</p>
        <div className="flex items-center justify-center mt-20 lg:scale-125">
          <div className="relative w-full max-w-4xl overflow-hidden">
            {/* Slider images */}
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
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
          </div>
        </div>
      </motion.section>

      <motion.section
        className="px-5 lg:px-20 py-16 lg:py-32"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="mb-5 text-center lg:text-left">🚀Nima uchun aynan Temurbek School ni tanlashingiz kerak?🚀</p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {[
            { title: "Haqiqiy IELTS imtihoni atmosferasi", desc: "IELTS ZONE siz uchun haqiqiy IELTS imtihon atmosferasini yaratadi." },
            { title: "Real exam materiallar", desc: "O'quvchilar haqiqiy IELTS imtihonida tushgan materiallarni bajaradi." },
            { title: "WRITING ekspertlari", desc: "Writinglarni IELTS imtihonidan yuqori ball olgan examinerlar baholaydi." },
            { title: "Listening uchun quloqchinlar", desc: "Har bir o'quvchi zamonaviy quloqchinlar bilan ta'minlanadi." },
            { title: "SPEAKING ekspertlari", desc: "Speakingdan imtihonni yuqori ball olgan examinerlar oladi." },
            { title: "Individual Feedback folder", desc: "Har bir o'quvchi examinerlardan Feedback Folderga ega bo'ladi." }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col justify-start rounded-2xl w-full lg:w-96 h-auto p-4 border border-slate-500"
              whileHover={{ scale: 1.05 }}
            >
              <h1 className="text-lg lg:text-xl mb-1">{item.title}</h1>
              <p className="text-sm lg:text-base text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
