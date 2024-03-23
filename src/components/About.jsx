import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-0.1' className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='lg:text-6xl px-10 md:text-6xl sm:text-3xl'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds,sell products, explain complex ideas and hire great people.</h1>
        <div className='w-full flex gap-5  border-t-[1px] mt-20  border-[#a1b562]'>
            <div className='w-1/2 px-10 '>
                <h1 className='text-7xl'>Our approach:</h1>
                <button className='px-10 py-6 uppercase flex gap-10 items-center bg-zinc-900 mt-7 rounded-full text-white'>Read More
                <div className='w-2 h-2 bg-white rounded-full'></div></button>
            </div>
            <div className='w-1/2 m-2 mr-12 rounded-2xl h-[60vh] bg-[#a1b562]'></div>
        </div>
    </div>
  )
}

export default About