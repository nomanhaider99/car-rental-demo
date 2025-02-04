import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import Fortuner from '@/public/fortuner.png'
import Revo from '@/public/revo.png'
import Truck from '@/public/truck.png'
import Link from 'next/link'

const Landing = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center py-10 px-4 lg:px-0">
      {/* Title Section */}
      <div className="text-base md:text-xl font-medium tracking-tight text-zinc-700">
        The Best Car Rental Application in UAE
      </div>
      <div className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] leading-none tracking-tighter font-bold text-center">
        Drive Your Dream – Easy, Affordable Car Rentals
      </div>
      <div className="mt-4 text-sm md:text-lg font-medium tracking-tight text-blue-600">
        Find the perfect ride for every journey – hassle-free bookings, unbeatable prices!
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <Link
          href={'/cars'}
          className='w-full sm:w-[24vw]'
        >
          <Button
            content="Book Your Car"
            className="w-full sm:w-[24vw]"
          />
        </Link>
        <Button
          content="Explore More Services"
          secondary
          className="w-full sm:w-[24vw]"
        />
      </div>

      {/* Images Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 mt-10">
        {/* Revo Image */}
        <div className="relative w-full max-w-lg lg:max-w-none">
          <Image
            alt="Revo"
            src={Revo}
            width={750}
            height={650}
            className="w-full h-auto"
          />
        </div>
        {/* Truck Image */}
        <div className="relative w-full max-w-xs lg:max-w-none lg:-ml-20 mt-6 lg:mt-0">
          <Image
            alt="Truck"
            src={Truck}
            width={280}
            height={240}
            className="w-full h-auto"
          />
        </div>
        {/* Fortuner Image */}
        <div className="relative w-full max-w-md lg:max-w-none lg:-ml-14 mt-6 lg:mt-0">
          <Image
            alt="Fortuner"
            src={Fortuner}
            width={550}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
