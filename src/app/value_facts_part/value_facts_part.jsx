import React from 'react';
// TODO responsive
export default function Value_facts_part() {
  return (
    <section className="flex flex-col w-full items-center justify-between p-10 bg-opacity-30 bg-blue-300">
      <h1 className="w-full text-center text-4xl pb-16">
         <b className="text-orange-600">Temurbek School</b> haqidagi faktlar
      </h1>
      <ul className="flex flex-wrap items-center justify-between w-full">
        <div className="w-full md:w-1/6 bg-opacity-50 bg-blue-800 rounded-md flex flex-col items-center justify-center mb-8 md:mb-0">
          <li className="w-4/5 bg-opacity-30 bg-slate-800 h-36 text-3xl rounded-lg flex items-center justify-center">
            B1+
          </li>
          <button className="w-1/6 pt-5 pb-5 text-4xl">150+</button>
        </div>
        <div className="w-full md:w-1/6 bg-opacity-50 bg-blue-800 rounded-md flex flex-col items-center justify-center mb-8 md:mb-0">
          <li className="w-4/5 bg-opacity-30 bg-slate-800 h-36 text-3xl rounded-lg flex items-center justify-center">
            B2+
          </li>
          <button className="w-1/6 pt-5 pb-5 text-4xl">100+</button>
        </div>
        <div className="w-full md:w-1/6 bg-opacity-50 bg-blue-800 rounded-md flex flex-col items-center justify-center mb-8 md:mb-0">
          <li className="w-4/5 bg-opacity-30 bg-slate-800 h-36 text-3xl rounded-lg flex items-center justify-center">
            C1
          </li>
          <button className="w-1/6 pt-5 pb-5 text-4xl">20+</button>
        </div>
        <div className="w-full md:w-1/6 bg-opacity-50 bg-blue-800 rounded-md flex flex-col items-center justify-center mb-8 md:mb-0">
          <li className="w-4/5 bg-opacity-30 bg-slate-800 h-36 text-3xl rounded-lg flex items-center justify-center">
            IELTS 6+
          </li>
          <button className="w-1/6 pt-5 pb-5 text-4xl">30+</button>
        </div>
        <div className="w-full md:w-1/6 bg-opacity-50 bg-blue-800 rounded-md flex flex-col items-center justify-center">
          <li className="w-4/5 bg-opacity-30 bg-slate-800 h-36 text-3xl rounded-lg flex items-center justify-center">
            IELTS 7+
          </li>
          <button className="w-1/6 pt-5 pb-5 text-4xl">15+</button>
        </div>
      </ul>
    </section>
  );
}
