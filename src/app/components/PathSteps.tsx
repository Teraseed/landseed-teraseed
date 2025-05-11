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
    <div className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-center font-heading text-xl text-amber-600 font-medium mb-6">
          THESE ARE JUST THREE STORIES—YOURS MIGHT BE NEXT.
        </h3>
        <h2 className="text-center font-heading text-4xl text-[#566e5a] font-medium mb-16 max-w-2xl mx-auto">
          FROM DREAM TO MOVE-IN,
          <br />
          YOUR PATH IN 4 STEPS.
        </h2>

        <div className="relative w-full h-[450px] md:h-[500px] lg:h-[550px]">
          {/* SVG Path Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="/images/lane.svg"
              alt="Path with 4 steps"
              className="w-full h-auto max-w-4xl mx-auto"
            />
          </div>

          {/* Step 1 - Left */}
          <div className="absolute left-0 top-[35%] md:top-[40%] max-w-[160px] md:max-w-[200px]">
            <h3 className="font-heading text-4xl text-[#566e5a] font-medium">
              {steps[0].number}
            </h3>
            <h4 className="font-heading text-lg font-medium text-[#566e5a] mb-1">
              {steps[0].title}
            </h4>
            <p className="font-body text-sm text-gray-700">
              {steps[0].description}
            </p>
          </div>

          {/* Step 2 - Bottom Center */}
          <div className="absolute left-[35%] bottom-[5%] transform -translate-x-1/2 max-w-[160px] md:max-w-[200px]">
            <h3 className="font-heading text-4xl text-[#566e5a] font-medium">
              {steps[1].number}
            </h3>
            <h4 className="font-heading text-lg font-medium text-[#566e5a] mb-1">
              {steps[1].title}
            </h4>
            <p className="font-body text-sm text-gray-700">
              {steps[1].description}
            </p>
          </div>

          {/* Step 3 - Top Center */}
          <div className="absolute left-[65%] top-[5%] transform -translate-x-1/2 max-w-[160px] md:max-w-[200px]">
            <h3 className="font-heading text-4xl text-[#566e5a] font-medium">
              {steps[2].number}
            </h3>
            <h4 className="font-heading text-lg font-medium text-[#566e5a] mb-1">
              {steps[2].title}
            </h4>
            <p className="font-body text-sm text-gray-700">
              {steps[2].description}
            </p>
          </div>

          {/* Step 4 - Right */}
          <div className="absolute right-0 top-[35%] md:top-[40%] max-w-[160px] md:max-w-[200px]">
            <h3 className="font-heading text-4xl text-[#566e5a] font-medium">
              {steps[3].number}
            </h3>
            <h4 className="font-heading text-lg font-medium text-[#566e5a] mb-1">
              {steps[3].title}
            </h4>
            <p className="font-body text-sm text-gray-700">
              {steps[3].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathSteps;
