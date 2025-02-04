import React from 'react'
import { IconType } from 'react-icons'

interface StepProps {
    logo: IconType,
    heading: string,
    description: string
}

const Step = ({
    description,
    heading,
    logo: Icon
}: StepProps) => {
  return (
    <div className='w-full flex justify-center items-center gap-3'>
        <div className='bg-blue-600 p-2 rounded-full'>
            <Icon size={20} color='#fff' />
        </div>
        <div className='flex flex-col'>
            <div className='text-xl font-semibold'>{heading}</div>
            <div className='text-sm text-zinc-800'>{description}</div>
        </div>
    </div>
  )
}

export default Step