import { testimonials } from "../assets/assets";
import TestimonialCard from "./TestimonialCard";
import Title from "./Title";

export default function Testimonial(){

  return(
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      
      <Title title="What our community say" subTitle="Discover why discerning travelers choose StayVenture for theri luxury accomodations around the world."/>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial}/>
        ))}
      </div>
    </div>
  )
}