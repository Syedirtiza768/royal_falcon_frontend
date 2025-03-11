import React from "react";

function AnimatedHeading2({ title }) {
  return (
    <div className="flex items-center mb-6">
      <div className="w-1.5 h-10 bg-primary mr-3"></div>
      <h2 className="text-[20px] font-bold text-gray-900">{title}</h2>
    </div>
  );
}

export default AnimatedHeading2;
