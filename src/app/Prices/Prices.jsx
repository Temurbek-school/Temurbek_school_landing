import "./responsive.css"
export default function Prices() {
    return (
        <section className='flex flex-col pt-10'>
            <h1 className='w-fit flex items-center justify-center text-4xl bg-opacity-95 rounded-lg pl-5 pr-5 pt-2 pb-2 bg-orange-600 ml-auto mr-auto hover:bg-green-700 active:bg-green-900 transition-colors duration-300'>
                Bizdagi kurslar
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 sm:mt-10 text-white'>
                {/* GENERAL ENGLISH */}
                <div id="subject_container" className='px-12 py-7 rounded-3xl w-96 bg-gray-800 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-700 '>
                    <span className='bg-green-500 p-3 rounded-xl'>GENERAL ENGLISH</span>
                    <p className='text-xl my-6'>
                        Ingliz tilini 0 dan boshlab <br />
                        Upper Intermediate darajada <br />
                        o'rganmoqchilar uchun
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Guruhdagi o'qvuchilar soni 15-25ta
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Gapirishga qaratilgan darslar
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Yuqori darajadagi o'qituvchilar
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Haftada 3 marta 2 soatdan darslar
                    </p>
                </div>

                {/* IELTS */}
                <div id="subject_container" className='px-12 py-7 rounded-3xl w-96 bg-orange-500 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-orange-400'>
                    <span className='bg-green-500 p-3 rounded-xl'>IELTS</span>
                    <p className='text-xl my-6'>
                        Ingliz tilini Intermediate <br />
                        darajadan IELTS darajasigacha <br />
                        o'rganmoqchilar uchun
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Guruhdagi o'qvuchilar soni 15-25ta
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Gapirishga qaratilgan darslar
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Yuqori darajadagi o'qituvchilar
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Haftada 3 marta 2 soatdan darslar
                    </p>
                </div>

                {/* Matematika */}
                <div id="subject_container" className='px-12 py-7 rounded-3xl w-96 bg-blue-900 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-800'>
                    <span className='bg-green-500 p-3 rounded-xl'>Matematika</span>
                    <p className='text-xl my-6'>
                        Matematika fanini 0 dan <br />
                        boshlab Intermediate darajada <br />
                        o'rganmoqchilar uchun
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Guruhdagi o'qvuchilar soni 15-25ta
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Mantiqiy fikrlashga qaratilgan darslar
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Yuqori darajadagi o'qituvchilar
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Haftada 3 marta 2 soatdan darslar
                    </p>
                </div>

                {/* Rus tili */}
                <div id="subject_container" className='px-12 py-7 rounded-3xl w-96 bg-teal-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-teal-600'>
                    <span className='bg-green-500 p-3 rounded-xl'>Rus tili</span>
                    <p className='text-xl my-6'>
                        Rus tili fanini 0 dan <br />
                        boshlab Intermediate darajada <br />
                        o'rganmoqchilar uchun
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Guruhdagi o'qvuchilar soni 15-25ta
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Gapirishga qaratilgan darslar
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Yuqori darajadagi o'qituvchilar
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Haftada 3 marta 2 soatdan darslar
                    </p>
                </div>

                {/* TOPIK */}
                <div id="subject_container" className='px-12 py-7 rounded-3xl w-96 bg-[#334155] transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#4f6872]'>
                    <span className='bg-green-500 p-3 rounded-xl'>TOPIK</span>
                    <p className='text-xl my-6'>
                        Koreys tili fanini 0 dan <br />
                        boshlab Intermediate darajada <br />
                        o'rganmoqchilar uchun
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Guruhdagi o'qvuchilar soni 15-25ta
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Gapirishga qaratilgan darslar
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Yuqori darajadagi o'qituvchilar
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Haftada 3 marta 2 soatdan darslar
                    </p>
                </div>

                {/* Prezident maktabiga tayyorlash */}
                <div id="subject_container" className='px-12 py-7 rounded-3xl w-96 bg-violet-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-violet-600'>
                    <span className='bg-green-500 p-3 rounded-xl'>Prezident maktabiga tayyorlash</span>
                    <p className='text-xl my-6'>
                        Prezident maktabiga kirishni <br />
                        maqsad qilgan o'quvchilar <br />
                        uchun maxsus tayyorlov kursi
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Guruhdagi o'qvuchilar soni 20-30ta
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Matematika, mantiqiy fikrlash <br /> va ingliz tili darslari
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Malakali va tajribali o'qituvchilar
                    </p>
                    <p className='flex items-center m-2 ml-0'>
                        <img className='mr-1' width={20} src="/check.png" alt="" />Haftada 3 marta 2 soatdan darslar
                    </p>
                </div>
            </div>
        </section>
    )
}
