const MultiStepNav = ({ currentStep }) => {
  const steps = [
    { number: 1, title: "Prerequisites", description: "Check requirements" },
    { number: 2, title: "Travel Information", description: "Personal & travel details" },
    { number: 3, title: "Payment", description: "Complete payment" }
  ]

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold font-mono text-sm border-2 transition-all duration-300 ${
                currentStep >= step.number
                  ? 'bg-amber-600 text-white border-amber-600 shadow-lg'
                  : 'bg-white text-amber-600 border-amber-300'
              }`}>
                {step.number}
              </div>
              <div className="mt-2 text-center">
                <div className={`text-sm font-bold font-mono ${
                  currentStep >= step.number ? 'text-amber-800' : 'text-amber-600'
                }`}>
                  {step.title}
                </div>
                <div className="text-xs font-mono text-amber-600 mt-1">
                  {step.description}
                </div>
              </div>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                currentStep > step.number ? 'bg-amber-600' : 'bg-amber-300'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MultiStepNav
