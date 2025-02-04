import React from 'react'
import Fortuner from '@/public/fortuner2.png'
import Image from 'next/image'
import { steps } from '@/data/steps'
import Step from '../ui/Step'

const Works = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 px-4 md:px-0">
      {/* Heading Section */}
      <div className="w-full flex flex-col items-center gap-2">
        <div className="text-xl font-semibold tracking-tighter">How It Works</div>
        <div className="text-3xl md:text-[3rem] text-center leading-none font-semibold tracking-tighter">
          <span className="text-blue-600">Car Booking Made Easy:</span>
          <br />
          Explaining the Process
        </div>
      </div>

      {/* Main Content: Image and Steps */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Image Container */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            alt="Fortuner"
            src={Fortuner}
            width={550}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Steps Container */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {steps.map((item, index) => (
            <Step
              key={index}
              heading={item.heading}
              description={item.description}
              logo={item.logo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works
