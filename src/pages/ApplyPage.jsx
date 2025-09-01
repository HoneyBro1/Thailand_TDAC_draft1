import MultiStepNav from '../components/ApplyForm/MultiStepNav'
import Step1_Prerequisite from '../components/ApplyForm/Step1_Prerequisite'
import Step2_TravelInfo from '../components/ApplyForm/Step2_TravelInfo'
import Step3_Payment from '../components/ApplyForm/Step3_Payment'
import { useState } from 'react'

const ApplyPage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1 - Prerequisites
    hasPassport: false,
    hasFlight: false,
    hasAccommodation: false,
    
    // Step 2 - Travel Information
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      nationality: '',
      passportNumber: '',
      passportExpiry: '',
      dateOfBirth: ''
    },
    travelInfo: {
      arrivalDate: '',
      departureDate: '',
      flightNumber: '',
      accommodation: '',
      purposeOfVisit: ''
    },
    
    // Step 3 - Payment
    paymentMethod: '',
    cardInfo: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: ''
    }
  })

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateFormData = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1_Prerequisite 
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
          />
        )
      case 2:
        return (
          <Step2_TravelInfo 
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )
      case 3:
        return (
          <Step3_Payment 
            formData={formData}
            updateFormData={updateFormData}
            prevStep={prevStep}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 font-mono mb-4">
            Apply For Thailand Digital Arrival Card
          </h1>
          <p className="text-xl text-amber-800 font-mono">
            Complete your application in 3 simple steps
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Progress Navigation */}
        <MultiStepNav currentStep={currentStep} />

        {/* Form Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg border-2 border-amber-200 shadow-lg p-8">
          {renderStep()}
        </div>
      </div>
    </div>
  )
}

export default ApplyPage