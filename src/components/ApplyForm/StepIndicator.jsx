import React from 'react';

const Step = ({ number, title, isActive }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-red-800 text-white' : 'bg-gray-200 text-gray-600'}`}>
        {number}
      </div>
      <span className={`font-medium ${isActive ? 'text-red-800' : 'text-gray-600'}`}>
        {title}
      </span>
    </div>
  );
};

const StepIndicator = ({ currentStep }) => {
  return (
    <div className="space-y-8">
      <Step number={1} title="Prerequisite" isActive={currentStep === 1} />
      <Step number={2} title="Travel Information" isActive={currentStep === 2} />
      <Step number={3} title="Payment" isActive={currentStep === 3} />
    </div>
  );
};

export default StepIndicator;
