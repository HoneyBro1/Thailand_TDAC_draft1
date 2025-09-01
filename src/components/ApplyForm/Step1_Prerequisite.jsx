const Step1_Prerequisite = ({ formData, updateFormData, nextStep }) => {
  const prerequisites = [
    {
      id: 'hasPassport',
      title: 'Valid Passport',
      description: 'You must have a valid passport with at least 6 months remaining validity',
      required: true
    },
    {
      id: 'hasFlight',
      title: 'Confirmed Flight Booking',
      description: 'You must have a confirmed flight booking to and from Thailand',
      required: true
    },
    {
      id: 'hasAccommodation',
      title: 'Accommodation Details',
      description: 'You must have accommodation details for your stay in Thailand',
      required: true
    }
  ]

  const handleCheckboxChange = (id) => {
    updateFormData('', { [id]: !formData[id] })
  }

  const allPrerequisitesMet = prerequisites.every(prereq => formData[prereq.id])

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-amber-900 font-mono mb-4">
          Prerequisites Check
        </h2>
        <p className="text-amber-800 font-mono">
          Please confirm that you have all the required documents and information before proceeding.
        </p>
      </div>

      <div className="space-y-6">
        {prerequisites.map((prereq) => (
          <div 
            key={prereq.id}
            className={`p-6 rounded-lg border-2 transition-all duration-300 ${
              formData[prereq.id]
                ? 'border-amber-400 bg-amber-50'
                : 'border-amber-200 bg-white'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <input
                  type="checkbox"
                  id={prereq.id}
                  checked={formData[prereq.id]}
                  onChange={() => handleCheckboxChange(prereq.id)}
                  className="w-6 h-6 text-amber-600 bg-white border-2 border-amber-300 rounded focus:ring-amber-500 focus:ring-2"
                />
              </div>
              <div className="flex-1">
                <label htmlFor={prereq.id} className="cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-bold text-amber-900 font-mono">
                      {prereq.title}
                    </h3>
                    {prereq.required && (
                      <span className="text-red-500 font-mono text-sm">*</span>
                    )}
                  </div>
                  <p className="text-amber-800 font-mono mt-2">
                    {prereq.description}
                  </p>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Important Notice */}
      <div className="mt-8 p-6 bg-gradient-to-r from-amber-200 to-orange-200 rounded-lg border-2 border-amber-300">
        <h3 className="text-lg font-bold text-amber-900 font-mono mb-2">
          Important Notice
        </h3>
        <p className="text-amber-800 font-mono text-sm leading-relaxed">
          The Thailand Digital Arrival Card is mandatory for all travelers entering Thailand. 
          You will not be granted entry into the country without this vital document. 
          Please ensure you have all required documents before proceeding with your application.
        </p>
      </div>

      {/* Next Button */}
      <div className="mt-8 flex justify-end">
        <button
          onClick={nextStep}
          disabled={!allPrerequisitesMet}
          className={`px-8 py-3 retro-button font-bold font-mono text-lg transition-all duration-300 ${
            allPrerequisitesMet
              ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg transform hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue to Travel Information →
        </button>
      </div>
    </div>
  )
}

export default Step1_Prerequisite
