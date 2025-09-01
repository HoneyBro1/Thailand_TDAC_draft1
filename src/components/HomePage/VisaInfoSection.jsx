const VisaInfoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-red-800 mb-8" style={{fontFamily: 'Arial, sans-serif'}}>
              What Is an Thailand Visa On Arrival?
            </h2>
            
            <div className="space-y-6 text-gray-700" style={{fontFamily: 'Arial, sans-serif'}}>
              <p className="text-lg leading-relaxed">
                The Thailand Visa On Arrival is a mandatory document for travelers wishing to enter Thailand. 
                This system gathers information about international visitors to ensure a smooth and secure entry process.
              </p>
              
              <p className="text-lg leading-relaxed">
                The Travel Declaration Card serves to facilitate immigration procedures and collect data for 
                statistical and security purposes. It helps authorities track visitor information and maintain 
                border security.
              </p>
              
              <p className="text-lg leading-relaxed">
                Previously, the Visa On Arrival was a physical form that travelers had to fill out upon arrival. 
                Now, it has moved to an electronic format, eliminating paperwork and streamlining the entry process.
              </p>
            </div>
            
            <button className="bg-red-800 hover:bg-red-900 text-white font-semibold py-4 px-8 rounded-lg mt-8 w-fit">
              Entry To Thailand >>
            </button>
          </div>

          {/* Right Side - Form Preview */}
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg text-sm font-medium">
              Arrival Card > Add Arrival Card > Preview
            </div>
            
            <div className="bg-white p-6 rounded-b-lg border border-blue-200">
              <p className="text-xs text-gray-600 mb-6">
                Please verify the accuracy of all information before submitting the form. Use 'Edit' to modify information, 
                'Delete' to remove entries, and select 'Submit' when all information is correct.
              </p>
              
              <div className="space-y-6">
                {/* Collapsible Section */}
                <div className="border border-gray-200 rounded-lg">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800">JOHN SMILLER LAO [2025/06/12]</h3>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    {/* Personal Information In Passport */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Personal Information In Passport</h4>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Full Name:</span>
                          <span className="font-medium">JOHN SMILLER LAO</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Nationality/Citizenship:</span>
                          <span className="font-medium">AMERICAN</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Passport No.:</span>
                          <span className="font-medium">234444343</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Personal Information */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Personal Information</h4>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date of Birth:</span>
                          <span className="font-medium">1990/03/12</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Gender:</span>
                          <span className="font-medium">MALE</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Occupation:</span>
                          <span className="font-medium">DOCTOR</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Country/Territory of Residence:</span>
                          <span className="font-medium">AMERICAN</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Visa No.:</span>
                          <span className="font-medium">-</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Phone No.:</span>
                          <span className="font-medium">+51 955679987</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">City/State of Residence:</span>
                          <span className="font-medium">LIMA</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Trip Information */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Trip Information</h4>
                      <div>
                        <h5 className="font-medium text-gray-700 mb-1">Arrival Information:</h5>
                        <div className="grid grid-cols-1 gap-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Date of Arrival:</span>
                            <span className="font-medium">2025/06/12</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Country/Territory where you Boarded:</span>
                            <span className="font-medium">AMERICAN SAMOA</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisaInfoSection