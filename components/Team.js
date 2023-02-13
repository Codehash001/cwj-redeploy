import React from 'react'

function Team() {
  return (
    <div id='team' className='flex flex-col items-center md:px-16 mt-10 mb-6'>
        <h1 className='font-bold font-Archivo text-5xl my-10 bg-gradient-to-r from-orange-500 to-red-700 bg-clip-text text-transparent' data-aos="fade-up">Team</h1>

        <div className='flex md:flex-row flex-col items-center md:items-start justify-between'>
            <div className='flex flex-col items-center p-6'  data-aos="fade-up" data-aos-delay="100">
                <img src='/owner.png' className='w-[300px] h-[300px]'/>
                <h1 className='font-Archivo text-2xl font-semibold mt-3 mb-2 text-brand-01'>Mr.Phoenyx</h1>
                <h1 className='font-Archivo text-xl font-medium text-center'>Cafe Owner, Majestic Battista</h1>
            </div>

            <div className='flex flex-col items-center p-6' data-aos="fade-up" data-aos-delay="150">
                <img src='/discIng.png' className='w-[300px] h-[300px]'/>
                <h1 className='font-Archivo text-2xl font-semibold mt-3 mb-2 text-brand-01'>Sam</h1>
                <h1 className='font-Archivo text-xl font-medium text-center'>Discord Engineer</h1>
            </div>

            <div className='flex flex-col items-center p-6' data-aos="fade-up" data-aos-delay="200">
                <img src='/webdev.png' className='w-[300px] h-[300px]'/>
                <h1 className='font-Archivo text-2xl font-semibold mt-3 mb-2 text-brand-01'>CodeHash</h1>
                <h1 className='font-Archivo text-xl font-medium text-center'>Web and Blockchain Dev</h1>
            </div>

            <div className='flex flex-col items-center p-6' data-aos="fade-up" data-aos-delay="250">
                <img src='/socialM.png' className='w-[300px] h-[300px]'/>
                <h1 className='font-Archivo text-2xl font-semibold mt-3 mb-2 text-brand-01'>Ashley</h1>
                <h1 className='font-Archivo text-xl font-medium text-center'>Social Media Director</h1>
            </div>

        </div>
    </div>
  )
}

export default Team

