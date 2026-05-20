import { useState, type FormEvent } from "react";
import Title from "../../components/owner/Title";
import { assets } from "../../assets/assets";

export default function AddCar() {
  const [image, setImage] = useState<File>();
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    pricePerDay: "",
    category: "",
    transmission: "",
    fuel_type: "",
    searing_capacity: "",
    location: "",
    description: "",
  });

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title="Add New Car"
        subtitle="Fill in details to list a new car for booking, pricing, availability and car specification."
      />
      <form
        action=""
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl"
      >
        {/* Car Image */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="car-image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt=""
              className="h-14 rounded cursor-pointer"
            />
            <input
              type="file"
              id="car-image"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files?.[0])}
            />
          </label>
          <p className="text-sm text-gray-500">Upload a picture of your car</p>
        </div>

        {/* Car Brand & Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="">Brand</label>
            <input
              type="text"
              placeholder="e.g. B.M.W. Audi Mercedes ..."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none transition-all duration-300 focus:shadow-xs focus:shadow-borderColor"
              value={car.brand}
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="">Model</label>
            <input
              type="text"
              placeholder="e.g. X5 E-Class M-4 ..."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none transition-all duration-300 focus:shadow-xs focus:shadow-borderColor"
              value={car.model}
              onChange={(e) => setCar({ ...car, model: e.target.value })}
            />
          </div>
        </div>

        {/* Car Year, Price, Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Year</label>
            <input
              type="text"
              placeholder="2025"
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none transition-all duration-300 focus:shadow-xs focus:shadow-borderColor"
              value={car.year}
              onChange={(e) => setCar({ ...car, year: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Daily Price (₹)</label>
            <input
              type="text"
              placeholder="100"
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none transition-all duration-300 focus:shadow-xs focus:shadow-borderColor"
              value={car.pricePerDay}
              onChange={(e) => setCar({ ...car, pricePerDay: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Category</label>
            <select
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none transition-all duration-300 focus:shadow-xs focus:shadow-borderColor"
              value={car.category}
              onChange={(e) => setCar({ ...car, category: e.target.value })}
            >
              <option value="">Select a category</option>
              <option value="suv">SUV</option>
              <option value="sedan">Sedan</option>
              <option value="van">Van</option>
            </select>
          </div>
        </div>

        {/* Car Transmission, Fuel Type, Seating Capacity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label>Transmission</label>
            <select
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none transition-all duration-300 focus:shadow-xs focus:shadow-borderColor"
              value={car.transmission}
              onChange={(e) => setCar({ ...car, transmission: e.target.value })}
            >
              <option value="">Select a transmission</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
              <option value="semi-automatic">Semi-Automatic</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Fuel Type</label>
            <select
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none transition-all duration-300 focus:shadow-xs focus:shadow-borderColor"
              value={car.fuel_type}
              onChange={(e) => setCar({ ...car, fuel_type: e.target.value })}
            >
              <option value="">Select a fuel type</option>
              <option value="diesel">Diesel</option>
              <option value="petrol">Petrol</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label>Seating Capacity</label>
            <input
              type="text"
              placeholder="4"
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none transition-all duration-300 focus:shadow-xs focus:shadow-borderColor"
              value={car.searing_capacity}
              onChange={(e) => setCar({ ...car, searing_capacity: e.target.value })}
            />
          </div>
        </div>

        {/* Car Location */}
        <div className="flex flex-col w-full">
          <label>Location</label>
          <select
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none transition-all duration-300 focus:shadow-xs focus:shadow-borderColor"
            value={car.location}
            onChange={(e) => setCar({ ...car, location: e.target.value })}
          >
            <option value="">Select a location</option>
            <option value="new york">New York</option>
            <option value="los angeles">Los Angeles</option>
            <option value="houston">Houston</option>
            <option value="chicago">Chicago</option>
          </select>
        </div>

        {/* Car Description */}
        <div className="flex flex-col w-full">
          <label>Description</label>
          <textarea
            rows={3}
            placeholder="e.g. A luxurious SUV with a spacious interior and a powerful engine."
            required
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none transition-all duration-300 focus:shadow-xs focus:shadow-borderColor"
            value={car.searing_capacity}
            onChange={(e) => setCar({ ...car, searing_capacity: e.target.value })}
          ></textarea>
        </div>

        <button className="flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer">
          <img src={assets.tick_icon} />
          List Your Car
        </button>
      </form>
    </div>
  );
}
