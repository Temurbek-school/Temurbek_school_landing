"use client"
import React from "react";
import { motion } from "framer-motion";
import "./responsive.css";

// TODO responsive
export default function AboutUsComponet() {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20, staggerChildren: 0.3 },
    },
  };

  const textImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } },
  };

  return (
    <motion.section
      className="flex flex-col items-center bg-opacity-50 bg-gray-700 w-full pt-5 pb-5 mt-5"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <motion.h1 className="text-3xl capitalize pt-5 pb-5" variants={textImageVariants}>
        Biz haqimizda
      </motion.h1>

      {/* Birinchi Bo'lim */}
      <motion.div
        className="w-full flex flex-col md:flex-row items-center justify-evenly"
        variants={textImageVariants}
      >
        <motion.img
          className="w-full md:w-2/5 rounded-3xl pt-5"
          src="/certificates.jpg"
          alt="Sertifikatlar"
          variants={textImageVariants}
        />
        <motion.p
          className="bg-opac w-3/6 shadow-md bg-opacity-80 bg-fuchsia-950 text-xl px-5 pt-5 p-2 about__us_text_part"
          variants={textImageVariants}
        >
          TEMURBEK SCHOOL O'quv Markazi <b> Temurbek Shaxobov</b> tomonidan tashkil etilgan bo'lib, Temurbek Shakhobov <em>yetti</em> yildan ortiq ta'lim
          berish tajribasiga ega bo‘lgan o‘qituvchidir. Temurbek Shakhobov <b>Umumiy Ingliz tili, CEFR, Multilevel testlar, IELTS, TKT va
          ESOL</b> bo‘yicha dars berib keladi. Ustozning rahbarligi ostida talabalar doimiy ravishda yuqori natijalarga erishib, Umumiy Ingliz
          tili va CEFR bo‘yicha C1 darajasiga erishdilar, shuningdek, 20 dan ortiq talabalar 7.0 va undan yuqori IELTS ballarini olishgan.
          Diqqatga sazovor jihati shundaki, Temurbek Shaxobov xalqaro ingliz tili o'qituvchilari orasida nufuzli <b>TKT Band 4 va C2</b>
          darajasini qo'lga kiritgan birinchi o'qituvchilardan biri hisoblanadilar, bu esa ustozning ta'limdagi yuqori malakalarinini
          tasdiqlaydi.
        </motion.p>
      </motion.div>

      {/* Ikkinchi Bo'lim */}
      <motion.div
        className="w-full flex flex-col-reverse md:flex-row items-center justify-around mt-5"
        variants={textImageVariants}
      >
        <motion.p
          className="bg-opac w-3/6 shadow-md bg-opacity-80 bg-fuchsia-950 text-xl px-5 pt-5 p-2 about__us_text_part"
          variants={textImageVariants}
        >
          TEMURBEK SCHOOL O'quv Markazi - bu Umumiy Ingliz tili, CEFR, TKT va IELTS bo‘yicha ta’lim berishga ixtisoslashgan ta’lim markazi. Kurslar yuqori
          malakali o‘qituvchilar tomonidan olib boriladi va talabalarining muloqot qilish ko‘nikmalarini oshirishga alohida e’tibor qaratiladi.
          Talabalar darajasini aniqroq baholash va ularning rivojlanishini kuzatib borish uchun har uch oyda bir marta darajani baholash
          imtihonlari o‘tkaziladi.
        </motion.p>
        <motion.img
          width={"450px"}
          className="rounded-3xl pt-5"
          src="/value_second_part.jpg"
          alt="Qadriyatlar"
          variants={textImageVariants}
        />
      </motion.div>
    </motion.section>
  );
}
