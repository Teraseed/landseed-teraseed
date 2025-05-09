import React from "react";

export type TestimonialProps = {
  name: string;
  age: number;
  image: string;
  quote: string;
  description: string;
  offset?: number;
};

const TestimonialItem: React.FC<TestimonialProps> = ({
  name,
  age,
  image,
  quote,
  description,
  offset = 0,
}) => {
  return (
    <div
      className="flex items-start mb-10"
      style={{ marginLeft: `${offset}rem` }}
    >
      <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="relative ml-4 md:ml-6 flex-grow max-w-xl rounded-lg overflow-hidden">
        {/* 背景层 */}
        <div className="absolute inset-0 bg-orange-gradient opacity-64 z-0 pointer-events-none"></div>

        {/* 内容层 */}
        <div className="relative z-10 p-4 md:p-6">
          <p className="text-neutral-darkest font-heading text-[18px] mb-3">
            &quot;{quote}&quot;
          </p>
          <div className="text-right">
            <p className="font-body text-neutral-darkest text-[16px] font-[300]">
              {name}, {age} years old.
            </p>
            <p className="font-body text-neutral-darkest text-[16px] font-[300]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
