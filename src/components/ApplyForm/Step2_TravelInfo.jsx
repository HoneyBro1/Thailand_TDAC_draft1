const Step2_TravelInfo = ({ formData, updateFormData, nextStep, prevStep }) => {
  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 'Australia', 
    'Japan', 'South Korea', 'Singapore', 'Malaysia', 'India', 'China', 'Other'
  ]

  const handleInputChange = (section, field, value) => {
    updateFormData(section, { [field]: value })
  }

  const isFormValid = () => {
    const { personalInfo, travelInfo } = formData
    return (
      personalInfo.firstName &&
      personalInfo.lastName &&
      personalInfo.email &&
      personalInfo.phone &&
      personalInfo.nationality &&
      personalInfo.passportNumber &&
      personalInfo.passportExpiry &&
      personalInfo.dateOfBirth &&
      travelInfo.arrivalDate &&
      travelInfo.departureDate &&
      travelInfo.flightNumber &&
      travelInfo.accommodation &&
      travelInfo.purposeOfVisit
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-amber-900 font-mono mb-4">
          Travel Information
        </h2>
        <p className="text-amber-800 font-mono">
          Please provide your personal details and travel information.
        </p>
      </div>

      <div className="space-y-8">
        {/* Personal Information */}
        <div>
          <h3 className="text-xl font-bold text-amber-900 font-mono mb-4">
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                First Name *
              </label>
              <input
                type="text"
                value={formData.personalInfo.firstName}
                onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
                className="w-full px-4 py-3 retro-input rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Last Name *
              </label>
              <input
                type="text"
                value={formData.personalInfo.lastName}
                onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.personalInfo.email}
                onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.personalInfo.phone}
                onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Nationality *
              </label>
              <select
                value={formData.personalInfo.nationality}
                onChange={(e) => handleInputChange('personalInfo', 'nationality', e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                required
              >
                <option value="">Select Nationality</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Date of Birth *
              </label>
              <input
                type="date"
                value={formData.personalInfo.dateOfBirth}
                onChange={(e) => handleInputChange('personalInfo', 'dateOfBirth', e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Passport Number *
              </label>
              <input
                type="text"
                value={formData.personalInfo.passportNumber}
                onChange={(e) => handleInputChange('personalInfo', 'passportNumber', e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Passport Expiry Date *
              </label>
              <input
                type="date"
                value={formData.personalInfo.passportExpiry}
                onChange={(e) => handleInputChange('personalInfo', 'passportExpiry', e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                required
              />
            </div>
          </div>
        </div>

        {/* Travel Information */}
        <div>
          <h3 className="text-xl font-bold text-amber-900 font-mono mb-4">
            Travel Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Arrival Date *
              </label>
              <input
                type="date"
                value={formData.travelInfo.arrivalDate}
                onChange={(e) => handleInputChange('travelInfo', 'arrivalDate', e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Departure Date *
              </label>
              <input
                type="date"
                value={formData.travelInfo.departureDate}
                onChange={(e) => handleInputChange('travelInfo', 'departureDate', e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Flight Number *
              </label>
              <input
                type="text"
                value={formData.travelInfo.flightNumber}
                onChange={(e) => handleInputChange('travelInfo', 'flightNumber', e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                placeholder="e.g., TG123"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Accommodation *
              </label>
              <input
                type="text"
                value={formData.travelInfo.accommodation}
                onChange={(e) => handleInputChange('travelInfo', 'accommodation', e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                placeholder="Hotel name or address"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Purpose of Visit *
              </label>
              <select
                value={formData.travelInfo.purposeOfVisit}
                onChange={(e) => handleInputChange('travelInfo', 'purposeOfVisit', e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                required
              >
                <option value="">Select Purpose</option>
                <option value="tourism">Tourism</option>
                <option value="business">Business</option>
                <option value="transit">Transit</option>
                <option value="medical">Medical Treatment</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={prevStep}
          className="px-8 py-3 bg-transparent border-2 border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white font-bold font-mono rounded-lg transition-all duration-300"
        >
          ← Back to Prerequisites
        </button>
        <button
          onClick={nextStep}
          disabled={!isFormValid()}
          className={`px-8 py-3 rounded-lg font-bold font-mono text-lg transition-all duration-300 ${
            isFormValid()
              ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg transform hover:scale-105'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue to Payment →
        </button>
      </div>
    </div>
  )
}

export default Step2_TravelInfo
