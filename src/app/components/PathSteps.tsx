import React from "react";

type StepData = {
  number: string;
  title: string;
  description: string;
};

const PathSteps: React.FC = () => {
  const steps: StepData[] = [
    {
      number: "01",
      title: "Feasibility & Zoning",
      description: "Free site check, bylaw review, and risk assessment",
    },
    {
      number: "02",
      title: "Design Match & Quote",
      description: "Floorplans, finish levels, and timeline estimate",
    },
    {
      number: "03",
      title: "Permits & Financing",
      description: "Rebates, grants, lender options, and forms",
    },
    {
      number: "04",
      title: "Delivery & Setup",
      description: "Transport, utility hook-up, handoff, and walkthrough",
    },
  ];

  return (
    <div className="w-full py-8 tablet:py-12 desktop:py-16 px-4 mb-16 tablet:mb-24 desktop:mb-32">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center font-heading text-base tablet:text-lg desktop:text-xl text-secondary-light font-medium mb-3 tablet:mb-4 desktop:mb-6">
          THESE ARE JUST THREE STORIES—YOURS MIGHT BE NEXT.
        </h3>
        <h2 className="text-center font-heading text-2xl tablet:text-3xl desktop:text-4xl text-[#566e5a] font-medium mb-8 tablet:mb-12 desktop:mb-16 max-w-2xl mx-auto">
          FROM DREAM TO MOVE-IN,
          <br />
          YOUR PATH IN 4 STEPS.
        </h2>

        {/* Path visualization for larger screens */}
        <div className="hidden tablet:block relative w-full h-[350px] tablet:h-[450px] desktop:h-[550px] overflow-hidden">
          {/* SVG Path Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/lane.svg"
              alt="Path with 4 steps"
              className="w-[95%] h-auto max-w-4xl mx-auto"
            />
          </div>

          {/* Step 1 - Left */}
          <div className="absolute left-[5%] tablet:left-[2%] desktop:left-[8%] top-[35%] w-[120px] tablet:w-[160px] desktop:w-[220px]">
            <h3 className="font-heading text-2xl tablet:text-3xl desktop:text-5xl text-[#566e5a] font-medium">
              {steps[0].number}
            </h3>
            <h4 className="font-heading text-sm tablet:text-base desktop:text-xl font-medium text-[#566e5a] mb-1 tablet:mb-2">
              {steps[0].title}
            </h4>
            <p className="font-body text-xs tablet:text-sm desktop:text-base text-gray-700">
              {steps[0].description}
            </p>
          </div>

          {/* Step 2 - Bottom Center */}
          <div className="absolute left-[40%] bottom-[0%] transform -translate-x-1/2 w-[120px] tablet:w-[160px] desktop:w-[220px]">
            <h3 className="font-heading text-2xl tablet:text-3xl desktop:text-5xl text-[#566e5a] font-medium">
              {steps[1].number}
            </h3>
            <h4 className="font-heading text-sm tablet:text-base desktop:text-xl font-medium text-[#566e5a] mb-1 tablet:mb-2">
              {steps[1].title}
            </h4>
            <p className="font-body text-xs tablet:text-sm desktop:text-base text-gray-700">
              {steps[1].description}
            </p>
          </div>

          {/* Step 3 - Top Center */}
          <div className="absolute left-[65%] top-[2%] transform -translate-x-1/2 w-[120px] tablet:w-[160px] desktop:w-[220px]">
            <h3 className="font-heading text-2xl tablet:text-3xl desktop:text-5xl text-[#566e5a] font-medium">
              {steps[2].number}
            </h3>
            <h4 className="font-heading text-sm tablet:text-base desktop:text-xl font-medium text-[#566e5a] mb-1 tablet:mb-2">
              {steps[2].title}
            </h4>
            <p className="font-body text-xs tablet:text-sm desktop:text-base text-gray-700">
              {steps[2].description}
            </p>
          </div>

          {/* Step 4 - Right */}
          <div className="absolute right-[5%] tablet:right-[-2%] desktop:right-[-3%] top-[50%] w-[120px] tablet:w-[160px] desktop:w-[220px]">
            <h3 className="font-heading text-2xl tablet:text-3xl desktop:text-5xl text-[#566e5a] font-medium">
              {steps[3].number}
            </h3>
            <h4 className="font-heading text-sm tablet:text-base desktop:text-xl font-medium text-[#566e5a] mb-1 tablet:mb-2">
              {steps[3].title}
            </h4>
            <p className="font-body text-xs tablet:text-sm desktop:text-base text-gray-700">
              {steps[3].description}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile-optimized view */}
      <div className="tablet:hidden mt-8 space-y-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center px-4"
          >
            <h3 className="font-heading text-4xl text-[#566e5a] font-medium">
              {step.number}
            </h3>
            <h4 className="font-heading text-xl font-medium text-[#566e5a] mb-2">
              {step.title}
            </h4>
            <p className="font-body text-base text-gray-700 max-w-xs mx-auto">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PathSteps;
