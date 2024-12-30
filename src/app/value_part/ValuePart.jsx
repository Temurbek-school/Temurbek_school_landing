"use client";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import ContactButton from "../components/ContactButton/ContactButton";
// TODO responsive
export default function ValuePart() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-opacity-50 bg-gray-600 w-full rounded-md pt-9">
      <motion.div
        className="flex items-center justify-between flex-col w-full md:w-1/2 p-5"
        initial={{ opacity: 0, x: -100 }} // Initial animation state
        animate={{ opacity: 1, x: 0 }} // Animate to visible state
        transition={{ duration: 0.5 }}
      >
        <h1 className="pb-6 text-2xl md:text-3xl w-full md:w-4/5">
          "Bilimga kiritilgan sarmoya eng yaxshi foydani beradi."
        </h1>
        <h3 className="pb-6 text-xl md:text-2xl w-full md:w-4/5">
          Benjamin Franklin
        </h3>
        <p className="pb-6 w-full md:w-4/5">
          "Biz sizga muvaffaqiyatga erishishingizda yordam beramiz va sizning
          har bir qadamingizda qo'llab-quvvatlaymiz. Sizning to'liq
          imkoniyatlaringizni ro'yobga chiqarishingiz uchun zarur bo'lgan
          vositalar, yo'l-yo'riqlar va rag'batlantirishni taqdim etamiz.
          Birgalikda biz qiyinchiliklarni imkoniyatlarga va orzularni
          yutuqlarga aylantiramiz."
        </p>
        <ContactButton />
      </motion.div>
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="/shakhobov_value.jpg"
          className="max-w-full h-auto rounded-md"
          alt="Qadriyat"
        />
      </div>
    </div>
  );
}
