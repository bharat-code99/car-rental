import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { assets, dummyCarData } from "../assets/assets";

export default function CarDetails(){

  type Car = {
    _id: string;
    owner: string;
    brand: string;
    model: string;
    image: string;
    year: number;
    category: string;
    seating_capacity: number;
    fuel_type: string;
    transmission: string;
    pricePerDay: number;
    location: string;
    description: string;
    isAvaliable: boolean;
    createdAt: string;
  };

  const [car, setCar] = useState<Car | undefined>();
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setCar(dummyCarData.find(car => car._id === id))
  }, [id])

  

  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-6 h-screen">

      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
      >
        <img src={assets.arrow_icon} alt="" className="rotate-180"/>
        Back to all cars
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left: Car Image and Details */}
        <div className="lg:col-span-2">
          <img className="w-full h-auto md:max-h-96 object-cover rounded-xl mb-6 shadow-md" src={car.image} alt=""/>
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">
                {car.brand} {car.model}
              </h1>
              <p className="text-gray-500 text-lg">
                {car.category} • {car.year}
              </p>
            </div>
            <hr className="border-borderColor my-6"/>
          </div>
        </div>

        {/* Right: Booking Form */}
      </div>

    </div>
  ) : <p>Loading...</p>
}