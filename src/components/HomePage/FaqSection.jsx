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
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            All the information you need to know about the Thailand Visa On Arrival
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
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
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Online Application Button */}
        <div className="mt-16 text-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg">
            Online Application
          </button>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
