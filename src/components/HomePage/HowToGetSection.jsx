const HowToGetSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Thai Temple and Text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">🏛️</div>
              <div className="text-2xl font-bold text-blue-600" style={{fontFamily: 'cursive'}}>
                thailand
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Get an Thailand Visa On Arrival
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                You can easily apply for your Thailand Visa On Arrival using our simple electronic form. 
                Just follow the steps, pay the fee, and wait to receive your approved card via email.
              </p>
              <p>
                Our application page provides clear instructions on how to get your Thailand Visa On Arrival.
              </p>
              <p>
                To make the process smoother, be sure you have all the necessary documents ready and 
                understand the steps involved.
              </p>
            </div>
          </div>

          {/* Right Side - Empty space as in screenshot */}
          <div className="flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-4">📋</div>
              <p className="text-lg">Application Process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToGetSection
