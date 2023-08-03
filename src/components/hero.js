import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='w-full bg-hero-image min-h-[600px] bg-no-repeat bg-cover bg-center bg-black/70 bg-blend-overlay pt-32 text-center grid place-items-center '>
        <div className='px-4 md:max-w-xl md:mx-auto lg:max-w-3xl'>
            <h2 className='mb-5 monty uppercase font-extrabold fs-1'>PERFECT PLACE TO GETAWAY</h2>
            <p className='fs-5 mb-10'>Perfectly located in Kajiado, Enkapune Cowboy Park is the place to visit and enjoy the cowboy experience with the beauty of surrounding nature, culture and the warm hospitality.</p>
            <div className='flex flex-wrap justify-center items-center gap-2.5 md:gap-5'>
                <div className='transition-all duration-200 ease-out btn-primary py-3 px-7'><a href={"#rooms"}  className='uppercase'>Find rooms</a></div> 
                <div className='transition-all duration-200 ease-out  btn-secondary py-3 px-7'><a href={"#menu"}   className='uppercase'>View menu</a></div>
            </div>
        </div>        
    </div>
  )
}

export default Hero