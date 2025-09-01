const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold retro-text tracking-wider mb-4 pixel-bounce">
              <span className="text-amber-800 drop-shadow-lg">THAILAND</span>
              <br />
              <span className="text-orange-700 text-4xl md:text-6xl">TDAC</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full retro-glow"></div>
          </div>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-4xl font-bold text-amber-900 font-mono mb-6 leading-tight">
            Thailand Digital Arrival Card
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-amber-800 font-mono mb-8 max-w-4xl mx-auto leading-relaxed">
            <span className="font-bold text-orange-700">Mandatory for all travelers</span> wishing to enter Thailand
          </p>

          {/* Main CTA */}
          <div className="mb-12">
            <p className="text-xl md:text-2xl font-bold text-amber-900 font-mono mb-8">
              All travellers must present the Thailand Digital Arrival Card to arrival in Thailand
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border-2 border-amber-300 shadow-lg">
              <div className="text-4xl font-bold text-amber-800 font-mono mb-4">01</div>
              <h3 className="text-xl font-bold text-amber-900 font-mono mb-2">Complete application</h3>
              <p className="text-amber-800 font-mono">Complete the application form.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border-2 border-amber-300 shadow-lg">
              <div className="text-4xl font-bold text-amber-800 font-mono mb-4">02</div>
              <h3 className="text-xl font-bold text-amber-900 font-mono mb-2">Receive you document</h3>
              <p className="text-amber-800 font-mono">Receive your document in the mail.</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold font-mono py-4 px-8 retro-button shadow-lg transform hover:scale-105 transition-all duration-300 text-lg retro-pulse">
              Apply For Thailand Digital Arrival Card
            </button>
            <button className="bg-transparent border-2 border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white font-bold font-mono py-4 px-8 retro-button transition-all duration-300 text-lg">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
