const HeroSection = () => {
  return (
    <section className="h-screen flex">
      {/* Left Side - Thai Beach Image */}
      <div className="w-1/2 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-br-[3rem] h-11/12"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')`,
            filter: 'brightness(0.8)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        >
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-1/2 bg-white p-12 flex flex-col justify-start items-center text-center pt-20">
        {/* Main Title */}
        <h1 className="text-6xl font-bold text-red-800 mb-6 leading-tight" style={{fontFamily: 'Arial, sans-serif'}}>
          Thailand Digital Arrival Card
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-black mb-8 font-bold" style={{fontFamily: 'Arial, sans-serif'}}>
          All travellers must present the Thailand Digital Arrival Card to arrival in Thailand
        </p>

        {/* Process Steps */}
        <div className="grid grid-cols-2 gap-6 mb-8">
                     <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-left">
             <div className="w-8 h-8 mb-3">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-red-800">
                 <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z M8,12V14H16V12H8M8,16V18H13V16H8Z"/>
                 <path d="M10,6H14V8H10V6Z"/>
                 <path d="M8,10H16V12H8V10Z"/>
               </svg>
             </div>
             <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete application</h3>
             <p className="text-gray-600 text-sm font-bold">Complete the application form.</p>
           </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-left">
            <div className="w-8 h-8 mb-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-red-800">
                <path d="M20,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.9 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z"/>
                <circle cx="18" cy="16" r="3" fill="white"/>
                <path d="M16.5,15.5L17.5,16.5L19.5,14.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Receive you document</h3>
            <p className="text-gray-600 text-sm font-bold">Receive your document in the mail.</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <button className="bg-red-800 hover:bg-red-900 text-white font-semibold py-3 px-6 rounded-lg">
            Apply For Thailand Digital Arrival Card
          </button>
          <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
