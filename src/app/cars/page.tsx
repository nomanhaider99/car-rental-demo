import Car from '@/components/ui/Car'
import { cars } from '@/data/cars'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-10'>
        {
          cars.map((item, index) => (
            <Car
              fuelCapacity={item.fuelCapacity}
              image={item.image}
              isFavorite={item.isFavorite}
              name={item.name}
              pricePerDay={item.pricePerDay}
              seats={item.seats}
              transmission={item.transmission}
              type={item.type}
              oldPrice={item.oldPrice}
              key={index}
            />
          ))
        }
      </div>
    </div>
  )
}

export default page