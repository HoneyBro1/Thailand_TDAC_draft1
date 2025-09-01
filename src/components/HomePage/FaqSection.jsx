import { useState } from 'react'

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const faqs = [
    {
      question: "Do I need a confirmed flight to apply for an Thailand Visa On Arrival?",
      answer: "You must have a confirmed flight to and from Thailand to complete the Travel Declaration card application process. Part of the form is related to your travel plans, including flight details."
    },
    {
      question: "How long is the Thailand Visa On Arrival valid for?",
      answer: "The Travel Declaration Card for Thailand does not dictate how long you can stay in the country, as it is not a visa. The Thailand Visa On Arrival Card allows you a single entry into the country, but the length of your stay depends on the visa policy of your nationality."
    },
    {
      question: "What is a Thailand Visa On Arrival?",
      answer: "The Thailand Visa On Arrival, is a mandatory document for travelers visiting Thailand. The system gathers important information about international visitors entering and leaving the country. The purpose of the Travel Declaration Card is to facilitate the immigration process on arrival in Thailand and collect data for statistical and security purposes."
    },
    {
      question: "How do I get a Thailand Visa On Arrival?",
      answer: "You can easily apply for your Thailand Visa On Arrival using our simple electronic form. Just follow the steps, pay the fee, and wait to receive your approved card via email. Our application page provides clear instructions on how to get your Thailand Visa On Arrival."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, your personal information is securely encrypted using SSL technology. We take data protection seriously and follow industry-standard security practices to keep your information safe."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "We offer a refund guarantee. If you're not satisfied with our service, you can request a refund. We stand behind our service and want to ensure your complete satisfaction."
    }
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-amber-100 to-orange-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 font-mono mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-amber-800 font-mono mb-8">
            All the information you need to know about the Thailand Visa On Arrival
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-lg border-2 border-amber-200 shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-inset"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-amber-900 font-mono pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-amber-600 transform transition-transform duration-200 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>
              
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-amber-200 pt-4">
                    <p className="text-amber-800 font-mono leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-200 to-orange-200 rounded-lg p-8 border-2 border-amber-300">
            <h3 className="text-2xl font-bold text-amber-900 font-mono mb-4">
              Online Application
            </h3>
            <p className="text-amber-800 font-mono mb-4">
              Your personal information is securely encrypted using SSL.
            </p>
            <div className="flex justify-center items-center space-x-2">
              <span className="text-amber-800 font-mono font-bold">SSL</span>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
