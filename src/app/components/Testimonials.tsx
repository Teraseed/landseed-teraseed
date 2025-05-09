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
    <div className="w-full max-w-5xl mx-auto py-12 px-4">
      <h2 className="text-center font-heading text-4xl text-primary font-medium mb-12">
        REAL LIVES, REAL IMPACT
      </h2>

      <div className="space-y-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialItem
            key={index}
            name={testimonial.name}
            age={testimonial.age}
            image={testimonial.image}
            quote={testimonial.quote}
            description={testimonial.description}
            offset={index * 10}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsComponent;
