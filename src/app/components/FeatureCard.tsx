import React, { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="width=[360px] height=[338px] bg-white p-8 rounded-[8px] shadow-sm flex flex-col items-left text-left transition-all hover:shadow-md relative overflow-hidden">
      {/* Icon Container */}
      <div className="text-primary-dark mb-6 h-16 w-16 flex items-center justify-center">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl text-gray-100 mb-3">{title}</h3>

      {/* Description */}
      <p className="font-body text-gray-200 text-[16px] font-[300] width=[260px] tracking-wide leading-relaxed">
        {description}
      </p>
    </div>
  );
}
