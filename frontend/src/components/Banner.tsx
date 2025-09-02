import { assets } from "../assets/assets";


export default function Banner(){
  return(
    <div className="flex flex-col items-center md:flex-row md:items-start justify-between
        px-8 min-md:pl-14 pt-10 bg-gradient-to-r from-[#0558fe] to-[#a9cfff] max-w-6xl mx-3 
        md:mx-auto rounded-2xl overflow-hidden"
      >
      <div className="text-white">
        <h2 className="text-3xl font-medium">Do you own a Luxury Car?</h2>
        <p className="mt-2">Monetize your vehicle effortlessly by listing it on CarRental.</p>
        <p className="max-w-lg">We take care of insurance, driver verification and secure payments - so you can earn passive income, stress-free</p>
        <button className="px-6 py-2 rounded-lg text-primary bg-white hover:bg-slate-200 transition-all text-sm mt-4 cursor-pointer">List Your Car</button>
      </div>

      <img src={assets.banner_car_image} alt="Car" className="max-h-44 mt-10"/>
    </div>
  )
}