import React from "react";

export default function AboutUs() {
  return (
    <section className="flex flex-col items-center bg-opacity-50 bg-gray-700 w-full pt-5 pb-5">
      <h1 className="text-3xl capitalize pt-5 pb-5">About us</h1>
      
      {/* First Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        <img className="w-full md:w-2/5 rounded-3xl pt-5" src="/certificates.jpg" alt="Certificates"></img>
        <p className="text-lg w-full md:w-1/2 px-5 md:px-0 md:pl-10">
          Temurbek School was established by
          <b> Temurbek Shakhobov</b>, a seasoned educator with over <em>seven</em> years of expertise in teaching{" "}
          <b>General English, CEFR, Multilevel Tests, IELTS, TKT, and ESOL</b>. Under his guidance, students have
          consistently excelled, achieving C1 proficiency in General English and CEFR, alongside securing over 20 IELTS
          scores of 7.0 and above. Notably, Temurbek Shakhobov is among the pioneering international English instructors
          to attain the prestigious <b>TKT Band 4</b>, further underscoring his exceptional teaching capabilities and
          commitment to excellence in language education.
        </p>
      </div>
      
      {/* Second Section */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between mt-5">
        <p className="w-full md:w-1/2 p-5 text-lg md:text-2xl">
          Temurbek School is an educational center specializing in teaching General English, CEFR, TKT, and IELTS. The courses are conducted by highly qualified instructors, with a strong emphasis on enhancing students' speaking skills. To assess students' proficiency levels with greater precision and monitor their progress, level assessments are administered every three months.
        </p>
        <img className="w-full md:w-2/5 rounded-3xl pt-5" src="/value_second_part.jpg" alt="Values"></img>
      </div>
    </section>
  );
}
