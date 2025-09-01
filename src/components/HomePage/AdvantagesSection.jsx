const AdvantagesSection = () => {
  const advantages = [
    {
      title: "Request the document any day of the year",
      description: "Apply for your Thailand Digital Arrival Card 24/7, 365 days a year",
      icon: "📅"
    },
    {
      title: "Approved Insurance Policy",
      description: "Comprehensive travel insurance coverage included with your application",
      icon: "🛡️"
    },
    {
      title: "Refund guarantee",
      description: "Not satisfied? Request a refund. We stand behind our service",
      icon: "💰"
    },
    {
      title: "24/7 customer support",
      description: "Round-the-clock assistance for all your travel needs",
      icon: "🆘"
    },
    {
      title: "Simple steps",
      description: "Easy-to-follow application process with clear instructions",
      icon: "✅"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 font-mono mb-6">
            Advantages of processing your application with us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-8 border-2 border-amber-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-amber-900 font-mono mb-4 leading-tight">
                  {advantage.title}
                </h3>
                <p className="text-amber-800 font-mono text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-gradient-to-r from-amber-200 to-orange-200 rounded-lg p-8 border-2 border-amber-300">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-amber-900 font-mono mb-4">
              Do I need an Thailand Visa On Arrival?
            </h3>
            <p className="text-lg text-amber-800 font-mono leading-relaxed max-w-4xl mx-auto">
              <span className="font-bold text-orange-700">Yes, all arriving passengers must have an approved Travel Declaration Card to enter and exit Thailand.</span> 
              You will not be granted entry into the country without this vital document.
            </p>
            <p className="text-amber-800 font-mono mt-4">
              Remember that an Travel Declaration Card is not the same as a visa. Although you may or may not need a visa to travel to Thailand, 
              you will always need an Travel Declaration Card.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvantagesSection
