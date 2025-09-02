

export default function TestimonialCard({testimonial}: any){

  const Star = ({ filled }: {filled: boolean}) => (
    <svg className="w-4 h-4 text-yellow-400" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z" />
    </svg>
  );

  return(
    <div className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500 max-w-xs">
      <div className="flex items-center gap-3">
          <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
          <div>
              <p className="text-xl">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.location}</p>
          </div>
      </div>
      <div className="flex items-center gap-1 mt-4">
          {Array(5).fill(0).map((_, index) => (
              <Star key={index} filled={testimonial.rating > index} />
          ))}
      </div>
      <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
    </div>
  )
}