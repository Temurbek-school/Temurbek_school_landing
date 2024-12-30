import React from 'react'
import ContactButton from '../components/ContactButton/ContactButton'

// TODO responsive
export default function Prices() {
    return (
        <section className='flex flex-col pt-10'>
        <h1 className='w-fit  flex items-center justify-center text-4xl bg-opacity-95 rounded-lg pl-5 pr-5 pt-2 pb-2 bg-orange-600 ml-auto mr-auto hover:bg-green-700 active:bg-green-900'>Bizdagi kurslar</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 sm:mt-10 text-white'>
        
            <div className='px-12 py-7 rounded-3xl w-96 bg-gray-800'>
                <span className='bg-green-500 p-3 rounded-xl'>GENERAL ENGLISH</span>
                <p className='text-xl my-6'>Ingliz tilini 0 dan boshlab <br />
                    Upper Intermediate darajada <br />
                    o'rganmoqchilar uchun</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Guruhdagi o'qvuchilar soni 15-25ta</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Gapirishga qaratilingan darslar</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Yuqori darajadagi o'qituvchilar</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Haftada 3 marta 2 soatdan darslar</p>
                
            </div>
            <div className='bg-orange-500 px-4 sm:px-6 lg:px-10 py-4 sm:py-5 lg:py-8 rounded-3xl max-w-full sm:max-w-sm lg:max-w-lg mx-auto lg:mx-4'>
                <span className='bg-green-500 p-3 rounded-xl'>IELTS</span>
                <p className='text-xl my-6'>Ingliz tilini Intermediate <br />
                    darajadan IELTS darajasigacha <br />
                    o'rganmoqchilar uchun</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Guruhdagi o'qvuchilar soni 15-25ta</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Gapirishga qaratilingan darslar</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Yuqori darajadagi o'qituvchilar</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Haftada 3 marta 2 soatdan darslar</p>
                            </div>
            <div className='bg-blue-900 px-12 py-7 rounded-3xl w-96'>
                <span className='bg-green-500 p-3 rounded-xl'>Matematika</span>
                <p className='text-xl my-6'>Matematika fanini 0 dan <br />
                boshlab Intermediate darajada <br /> o'rganmoqchilar uchun</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Guruhdagi o'qvuchilar soni 15-25ta</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Mantiqiy fikrlarshga qaratilgan darslar</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Yuqori darajadagi o'qituvchilar</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Haftada 3 marta 2 soatdan darslar</p>
                            </div>
            <div className='bg-teal-700 px-12 py-7 rounded-3xl w-96' >
                <span className='bg-green-500 p-3 rounded-xl'>Rus tili </span>
                <p className='text-xl my-6'>Rus tili fanini 0 dan <br />
                boshlab Intermediate darajada <br /> o'rganmoqchilar uchun</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Guruhdagi o'qvuchilar soni 15-25ta</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Gapirishga qaratilgan darslar</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Yuqori darajadagi o'qituvchilar</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Haftada 3 marta 2 soatdan darslar</p>
                            </div>
            <div className='px-12 py-7 rounded-3xl w-96' style={{ backgroundColor: "#334155" }}>
                <span className='bg-green-500 p-3 rounded-xl'>TOPIK</span>
                <p className='text-xl my-6'>Koreys tili fanini 0 dan <br />
                boshlab Intermediate darajada <br /> o'rganmoqchilar uchun</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Guruhdagi o'qvuchilar soni 15-25ta</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Gapirishga qaratilgan darslar</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Yuqori darajadagi o'qituvchilar</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Haftada 3 marta 2 soatdan darslar</p>
                            </div>
            <div className='bg-violet-700 px-4 sm:px-6 lg:px-10 py-4 sm:py-5 lg:py-8 rounded-3xl max-w-full sm:max-w-sm lg:max-w-lg mx-auto lg:mx-4'>
                <span className='bg-green-500 p-3 rounded-xl'>Prezident maktabiga tayyorlash</span>
                <p className='text-xl my-6'>Prezident maktabiga kirishni <br />
                maqsad qilgan o'quvchilar <br />
                uchun maxsus tayyorlov kursi</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Guruhdagi o'qvuchilar soni 20-30ta</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Matematika, mantiqiy fikrlash <br /> va ingliz tili darslari</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Malakali va tajribali o'qituvchilar</p>
                <p className='flex items-center m-2 ml-0'><img className='mr-1' width={20} src="/check.png" alt="" />Haftada 3 marta 2 soatdan darslar</p>
                            </div>
        </div>
        </section>
    )
}
