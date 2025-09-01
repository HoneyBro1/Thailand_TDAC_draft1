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
    <section className="py-16">
      {/* Red Banner Section */}
      <div className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Advantages of processing your application with us
            </h2>
          </div>

          {/* Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📅</div>
              <p className="text-white text-sm">Request the document<br />any day of the year</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <p className="text-white text-sm">Approved Insurance Policy</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <p className="text-white text-sm">Refund guarantee<br />Not satisfied? Request a refund.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <p className="text-white text-sm">24/7 customer support<br />Contact us.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👍</div>
              <p className="text-white text-sm">Simple steps</p>
            </div>
          </div>
        </div>
      </div>

      {/* White Content Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-red-600 mb-8">
            Do I need an Thailand Visa On Arrival?
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            Yes, all arriving passengers must have an approved Travel Declaration Card to enter and exit Thailand.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            You will not be granted entry into the country without this vital document.
          </p>
          <p className="text-lg text-gray-700">
            Remember that an Travel Declaration Card is not the same as a visa. Although you may or may not need a visa to travel to Thailand, 
            you will always need an Travel Declaration Card.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AdvantagesSection
