import React from "react";

export default function AboutUs() {
  return (
    <section className="flex flex-col items-center bg-opacity-50 bg-gray-700 w-full pt-5 pb-5">
      <h1 className="text-3xl capitalize pt-5 pb-5">Biz haqimizda</h1>
      
      {/* Birinchi Bo'lim */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        <img className="w-full md:w-2/5 rounded-3xl pt-5" src="/certificates.jpg" alt="Sertifikatlar"></img>
        <p className="bg-opac w-full md:w-1/2 px-5 md:px-0 md:pl-10 pt-5 text-sm">
          Temurbek Maktabi <b> Temurbek Shaxobov</b> tomonidan tashkil etilgan bo'lib, ustoz <em>yetti</em> yildan ortiq ta'lim berish 
          tajribasiga ega bo‘lgan o‘qituvchidir. Ustoz  <b>Umumiy Ingliz tili, CEFR, Multilevel testlar, IELTS, TKT va ESOL</b> bo‘yicha 
          dars berib keladi. Uning rahbarligi ostida talabalar doimiy ravishda yuqori natijalarga erishib, Umumiy Ingliz tili va CEFR 
          bo‘yicha C2 darajasiga erishdilar, shuningdek, 20 dan ortiq talabalar 7.0 va undan yuqori IELTS ballarini olishgan. 
          Diqqatga sazovor jihati shundaki, Temurbek Shaxobov xalqaro ingliz tili o'qituvchilari orasida nufuzli <b>TKT Band 4 </b> 
          darajasini qo'lga kiritgan birinchi o'qituvchilardan biri hisoblanadilar, bu esa ustozning ta'limdagi yuqori malakalarinini tasdiqlaydi.
        </p>
      </div>
      
      {/* Ikkinchi Bo'lim */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between mt-5">
        <p className="w-full md:w-1/2 p-5 text-lg md:text-2xl">
          Temurbek Maktabi - bu Umumiy Ingliz tili, CEFR, TKT va IELTS bo‘yicha ta’lim berishga ixtisoslashgan ta’lim markazi. 
          Kurslar yuqori malakali o‘qituvchilar tomonidan olib boriladi va talabalarining muloqot qilish ko‘nikmalarini oshirishga 
          alohida e’tibor qaratiladi. Talabalar darajasini aniqroq baholash va ularning rivojlanishini kuzatib borish uchun har 
          uch oyda bir marta daraja baholash imtihonlari o‘tkaziladi.
        </p>
        <img className="w-full md:w-2/5 rounded-3xl pt-5" src="/value_second_part.jpg" alt="Qadriyatlar"></img>
      </div>
    </section>
  );
}
