import React from "react";
import { Heart } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Book from "./Book";

interface CarProps {
  name: string;
  type: string;
  image: StaticImageData;
  fuelCapacity: string;
  transmission: string;
  seats: string;
  pricePerDay: number;
  oldPrice?: number;
  isFavorite: boolean;
}

const Car: React.FC<CarProps> = ({
  name,
  type,
  image,
  fuelCapacity,
  transmission,
  seats,
  pricePerDay,
  oldPrice,
  isFavorite,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 w-full max-w-xs py-4">
      {/* Favorite Icon */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-gray-500 text-sm">{type}</p>
        </div>
        <Heart className={`w-5 h-5 ${isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"}`} />
      </div>

      {/* Car Image */}
      <div className="flex justify-center py-4">
        <Image
            src={image}
            alt={name}
            width={204}
            height={64}
            className="md:w-[204px] h-[64px] object-contain"
        />
      </div>

      {/* Car Details */}
      <div className="flex justify-between text-gray-500 text-sm">
        <p>⛽ {fuelCapacity}</p>
        <p>🕹 {transmission}</p>
        <p>👥 {seats}</p>
      </div>

      {/* Pricing & Rent Button */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-xl font-bold text-gray-800">AED {pricePerDay.toFixed(2)}<span className="text-sm">/day</span></p>
          {oldPrice && <p className="text-gray-400 text-sm line-through">AED {oldPrice.toFixed(2)}</p>}
        </div>
        <Book
          trigger={<button className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600">
            Rent Now
          </button>}
         />
      </div>
    </div>
  );
};

export default Car;
