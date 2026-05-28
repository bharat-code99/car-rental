import { useEffect, useState } from "react";
import { assets, dummyCarData, dummyMyBookingsData } from "../assets/assets";
import Title from "../components/Title";

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

interface BookingData {
  _id: string;
  car: Car;
  user: string;
  owner: string;
  pickupDate: string;
  returnDate: string;
  status: string;
  price: number;
  createdAt: string;
}

const defalutBookingData = [
  {
    _id: "68482bcc98eb9722b7751f70",
    car: dummyCarData[0],
    user: "6847f7cab3d8daecdb517095",
    owner: "6847f7cab3d8daecdb517095",
    pickupDate: "2025-06-13T00:00:00.000Z",
    returnDate: "2025-06-14T00:00:00.000Z",
    status: "confirmed",
    price: 440,
    createdAt: "2025-06-10T12:57:48.244Z",
  },
];

export default function MyBookings() {
  const [bookings, setBookings] = useState<BookingData[]>(defalutBookingData);
  const fetchMyBookings = () => {
    setBookings(dummyMyBookingsData);
  };

  useEffect(() => fetchMyBookings(), []);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-12 text-sm max-w-7xl">
      <Title
        title="My Bookings"
        subTitle="View and manage all your car bookings"
        align="left"
      />
      <div>
        {bookings.map((booking, index) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-borderColor rounded-lg mt-5 first:mt-12"
          >
            <div className="md:col-span-1">
              <div className="rounded-md overflow-hidden mb-3">
                <img
                  src={booking.car.image}
                  alt=""
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
              <p className="text-lg font-medium mt-2">
                {booking.car.brand} {booking.car.model}
              </p>
              <p className="text-gray-500">
                {booking.car.year} {booking.car.category} {booking.car.location}
              </p>
            </div>

            {/* Booking Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <p className="px-3 py-1.5 bg-light rounded">
                  Booking #{index + 1}
                </p>
                <p
                  className={`px-3 py-1 text-xs rounded-full ${booking.status === "confirmed" ? "bg-green-400/15 text-green-600" : "bg-red-400/15 text-red-600"}`}
                >
                  {booking.status}
                </p>
              </div>
              <div className="flex gap-2 mt-3 items-start">
                <img
                  src={assets.calendar_icon_colored}
                  alt=""
                  className="w-4 h-4 mt-1"
                />
                <div>
                  <p className="text-gray-500">Rental Period</p>
                  <p>
                    {booking.pickupDate.split("T")[0]} to{" "}
                    {booking.pickupDate.split("T")[0]}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-3 items-start">
                <img
                  src={assets.location_icon_colored}
                  alt=""
                  className="w-4 h-4 mt-1"
                />
                <div>
                  <p className="text-gray-500">Pick-up Location</p>
                  <p>{booking.car.location}</p>
                </div>
              </div>
            </div>
            {/* Price */}
            <div className="md:col-span-1 flex flex-col justify-between gap-6">
              <div className="text-sm text-gray-500 text-right">
                <p>Total Price</p>
                <h1 className="text-2xl font-semibold text-primary">
                  ₹{booking.price}
                </h1>
                <p>Booked On {booking.createdAt.split("T")[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
