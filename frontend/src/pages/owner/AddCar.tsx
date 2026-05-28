import { useState } from "react";
import Title from "../../components/owner/Title";
import { assets } from "../../assets/assets";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";

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

  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title="Add New Car"
        subtitle="Fill in details to list a new car for booking, pricing, availability and car specification."
      />
      <div className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl">
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
          <TextInput 
            label="Brand"
            value={car.brand}
            onUpdate={(e: React.ChangeEvent<HTMLInputElement>) => setCar({ ...car, brand: e.target.value })}
            required
            type="text"
            placeholder="e.g. B.M.W. Audi Mercedes ..."
          />
          <TextInput 
            label="Model"
            value={car.model}
            onUpdate={(e: React.ChangeEvent<HTMLInputElement>) => setCar({ ...car, model: e.target.value })}
            required
            type="text"
            placeholder="e.g. X5 E-Class M-4 ..."
          />
        </div>

        {/* Car Year, Price, Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <TextInput 
            label="Year"
            value={car.year}
            onUpdate={(e: React.ChangeEvent<HTMLInputElement>) => setCar({ ...car, year: e.target.value })}
            required
            type="text"
            placeholder="2025"
          />
          <TextInput 
            label="Daily Price (₹)"
            value={car.pricePerDay}
            onUpdate={(e: React.ChangeEvent<HTMLInputElement>) => setCar({ ...car, pricePerDay: e.target.value })}
            required
            type="text"
            placeholder="100"
          />
          <SelectInput
            label="Category"
            onUpdate={(val: string) => setCar({ ...car, category: val })}
            required
            value={car.category}
            options={[
              {value: "", label:"Select a category"},
              {value: "suv", label:"SUV"},
              {value: "sedan", label:"Sedan"},
              {value: "van", label:"Van"},
            ]}
          />
        </div>

        {/* Car Transmission, Fuel Type, Seating Capacity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <SelectInput
            label="Transmission"
            onUpdate={(val: string) => setCar({ ...car, transmission: val })}
            required
            value={car.transmission}
            options={[
              {value: "", label:"Select a transmission"},
              {value: "automatic", label:"Automatic"},
              {value: "manual", label:"Manual"},
              {value: "semi-automatic", label:"Semi-Automatic"},
            ]}
          />
          <SelectInput
            label="Fuel Type"
            onUpdate={(val: string) => setCar({ ...car, fuel_type: val })}
            required
            value={car.fuel_type}
            options={[
              {value: "", label:"Select a fuel-type"},
              {value: "diesel", label:"Diesel"},
              {value: "petrol", label:"Petrol"},
              {value: "electric", label:"Electric"},
              {value: "hybrid", label:"Hybrid"},
            ]}
          />
          <TextInput 
            label="Seating Capacity"
            value={car.searing_capacity}
            onUpdate={(e: React.ChangeEvent<HTMLInputElement>) => setCar({ ...car, searing_capacity: e.target.value })}
            required
            type="text"
            placeholder="4"
          />
        </div>

        {/* Car Location */}
        <SelectInput
            label="Location"
            onUpdate={(val: string) => setCar({ ...car, location: val })}
            required
            value={car.location}
            options={[
              {value: "", label:"Select a location"},
              {value: "new york", label:"New York"},
              {value: "los angeles", label:"Los Angeles"},
              {value: "houston", label:"Houston"},
              {value: "chicago", label:"Chicago"},
            ]}
          />

        {/* Car Description */}
        <div className="flex flex-col w-full">
          <label>Description</label>
          <textarea
            rows={3}
            placeholder="e.g. A luxurious SUV with a spacious interior and a powerful engine."
            required
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none transition-all duration-300 focus:shadow-xs focus:shadow-borderColor"
            value={car.description}
            onChange={(e) => setCar({ ...car, description: e.target.value })}
          ></textarea>
        </div>

        <button className="flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer">
          <img src={assets.tick_icon} />
          List Your Car
        </button>
      </div>
    </div>
  );
}
