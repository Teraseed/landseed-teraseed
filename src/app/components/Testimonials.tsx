import React from "react";
import TestimonialItem from "./TestimonialItem";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("testimonials");

  const testimonials = [
    {
      name: t("susan.name"),
      age: parseInt(t("susan.age")),
      image: "/images/susan.png",
      quote: t("susan.quote"),
      description: t("susan.description"),
    },
    {
      name: t("leo.name"),
      age: parseInt(t("leo.age")),
      image: "/images/leo.png",
      quote: t("leo.quote"),
      description: t("leo.description"),
    },
    {
      name: t("maya.name"),
      age: parseInt(t("maya.age")),
      image: "/images/maya.png",
      quote: t("maya.quote"),
      description: t("maya.description"),
    },
  ];

  return (
    <section className="w-full py-12 mobile:py-16 tablet:py-20">
      <div className="max-w-5xl mx-auto px-4 mobile:px-6 tablet:px-8">
        <h2 className="text-center font-heading text-[20px] desktop:text-[40px] text-primary font-medium mb-8 mobile:mb-10 tablet:mb-12">
          {t("title")}
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
}
