import React, { useState } from 'react';
import StepIndicator from '../components/ApplyForm/StepIndicator.jsx';
import Step1_Prerequisite from '../components/ApplyForm/Step1_Prerequisite.jsx';
import Step2_TravelInfo from '../components/ApplyForm/Step2_TravelInfo.jsx';
import Step3_Payment from '../components/ApplyForm/Step3_Payment.jsx';



const ApplyPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // --- Step 1 Data ---
    arrivalDate: '',
    passportNumber: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    countryOfResidence: '',
    email: '',
    confirmEmail: '',
    phoneCode: 'India (+91)',
    phoneNumber: '',
    gender: 'Male',
    additionalTravelers: [],

    // --- Step 2 Data ---
    departureCountry: '',
    purposeOfVisit: 'Vacation',
    flightNumber: '',
    provinceOfStay: '',
    addressInThailand: '',

    // --- Step 3 Data ---
    processingSpeed: 'standard', // 'standard' or 'fast'
  });

  // Function to go to the next step
  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  // Function to go to the previous step
  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  // Function to update form data from child components
  const updateFormData = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1_Prerequisite formData={formData} updateFormData={updateFormData} onNext={handleNext} />;
      case 2:
        return <Step2_TravelInfo formData={formData} updateFormData={updateFormData} onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Step3_Payment formData={formData} updateFormData={updateFormData} onBack={handleBack} />;
      default:
        return <Step1_Prerequisite formData={formData} updateFormData={updateFormData} onNext={handleNext} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl flex">
          {/* Left Side: Step Indicator */}
          <div className="w-1/4 p-8 border-r border-gray-200">
            <StepIndicator currentStep={currentStep} />
          </div>
          
          {/* Right Side: Form Content */}
          <div className="w-3/4 p-8">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;

