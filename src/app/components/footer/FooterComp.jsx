import React from 'react'
import ContactButton from '../ContactButton/ContactButton'
// TODO responsive
export default function FooterComp() {
  return (
    <div className='flex items-center relative justify-center flex-col bg-violet-900 mt-32 pt-16 w-full top-0  h-fit p-14'>
    {/* TODO Ibrohimbey footerni togirlang */}
        <section className='flex items-center justify-between bg-violet-800 w-4/5 p-8 rounded-2xl shadow-lg absolute top-20'>
            <div>
                <h1 className='text-2xl font-semibold'>Kutmang</h1>
                <p className='text-gray-400'>Biz sizga eng yaxshi natijalarga erishishingizga yordam<br />
                berish uchun doim siz bilanmiz. Eng yuqori maqsadni <br />
                qo'ying - hoziroq bepul sinov darsiga yoziling.</p>
            </div>
            <ContactButton/>
        </section>
        <section className='flex items-start justify-center gap-52 border-b-2 border-gray-500 pb-5'>
            <div>
                <h1 className='text-3xl font-semibold text-yellow-500'>Temurbek School</h1>
                <p className='mt-2 mb-2 text-gray-400'>Temurbek School: O'zbekistonning eng yuqori IELTS <br />
                o'qituvchilari uyi, 7.5 ball olganlar va CEFR sertifikatiga <br />
                ega o'qituvchilar soni bo'yicha yetakchi. Biz barcha <br />
                darajadagi talabalarga ilg'or, talabaga yo'naltirilgan <br />
                IELTS tayyorgarligini taqdim etamiz.</p>
                <p className='text-xl'>Obuna bo'ling</p>
                <div className='flex items-center gap-2.5'>
                    <img width={35} src="/youtube.png" alt="" />
                    <img width={35} src="/instagram.png" alt="" />
                    <img width={35} src="/telegram.png" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-xl font-semibold' >Aloqaga chiqing</h1>
                <p className='mt-2 text-gray-400'>+998 97 912-29-95</p>
                <p className='text-gray-400'>Telegram</p>
            </div>
            <div>
                <h1 className='text-xl font-semibold'>Temurbek School</h1>
                <p className='mt-2 text-gray-400'>Biz haqimizda</p>
                <p className='text-gray-400'>O'qituvchilar</p>
                <p className='text-gray-400'>Kurslar</p>
                <p className='text-gray-400'>Natijalar</p>
                <p className='text-gray-400'>Mock imtihonlar</p>
            </div>
        </section>
        <hr />
        <p className='text-start'>Copyright © 2024. All Rights Reserved.</p>
    </div>
  )
}
