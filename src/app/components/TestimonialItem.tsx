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
      className="flex flex-row items-start justify-center mb-10 mx-auto max-w-2xl"
      style={{ marginLeft: offset > 0 ? `${offset}rem` : 0 }}
    >
      <div className="w-20 h-20 mobile:w-24 mobile:h-24 tablet:w-32 tablet:h-32 desktop:w-36 desktop:h-36 rounded-full overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="relative ml-4 mobile:ml-5 tablet:ml-6 desktop:ml-6 flex-grow max-w-xl rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-orange-gradient opacity-64 z-0 pointer-events-none"></div>
        <div className="relative z-10 p-3 mobile:p-4 tablet:p-5 desktop:p-6">
          <p className="text-neutral-darkest font-heading text-[14px] mobile:text-[16px] tablet:text-[17px] desktop:text-[18px] mb-2 mobile:mb-3">
            &quot;{quote}&quot;
          </p>
          <div className="text-right">
            <p className="font-body text-neutral-darkest text-[12px] mobile:text-[13px] tablet:text-[14px] desktop:text-[16px] font-[300]">
              {name}, {age} years old.
            </p>
            <p className="font-body text-neutral-darkest text-[12px] mobile:text-[13px] tablet:text-[14px] desktop:text-[16px] font-[300]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
