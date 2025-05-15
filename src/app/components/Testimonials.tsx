import React from "react";
import TestimonialItem from "./TestimonialItem";

const TestimonialsComponent = () => {
  const testimonials = [
    {
      name: "Susan",
      age: 33,
      image: "/images/susan.png",
      quote:
        "We built a suite for Mom—now she has her own space, and we have peace of mind.",
      description: "Caring for her elderly mother.",
    },
    {
      name: "Leo",
      age: 40,
      image: "/images/leo.png",
      quote:
        "My office is just 20 steps from my kitchen. This is the best decision that I made for my business.",
      description: "Building a career from his backyard.",
    },
    {
      name: "Maya",
      age: 58,
      image: "/images/maya.png",
      quote: "We now earn $1,500/month renting to a long-term tenant.",
      description: "Turning a yard into monthly income.",
    },
  ];

  return (
    <section className="w-full py-12 mobile:py-16 tablet:py-20">
      <div className="max-w-5xl mx-auto px-4 mobile:px-6 tablet:px-8">
        <h2 className="text-center font-heading text-[20px] desktop:text-[40px] text-primary font-medium mb-8 mobile:mb-10 tablet:mb-12">
          REAL LIVES, REAL IMPACT
        </h2>

        {/* Mobile and Tablet View */}
        <div className="desktop:hidden space-y-10 flex flex-col items-center w-full max-w-2xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem
              key={`mobile-${index}`}
              name={testimonial.name}
              age={testimonial.age}
              image={testimonial.image}
              quote={testimonial.quote}
              description={testimonial.description}
              offset={0}
            />
          ))}
        </div>

        {/* Desktop View with staggered effect */}
        <div className="hidden desktop:flex desktop:flex-col space-y-10 max-w-3xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem
              key={`desktop-${index}`}
              name={testimonial.name}
              age={testimonial.age}
              image={testimonial.image}
              quote={testimonial.quote}
              description={testimonial.description}
              offset={index === 0 ? -8 : index === 2 ? 8 : 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsComponent;
