import { useState } from 'react'

const Step3_Payment = ({ formData, updateFormData, prevStep }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleInputChange = (field, value) => {
    updateFormData('cardInfo', { [field]: value })
  }

  const handlePaymentMethodChange = (method) => {
    updateFormData('', { paymentMethod: method })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsCompleted(true)
    }, 3000)
  }

  const isFormValid = () => {
    const { cardInfo } = formData
    return (
      formData.paymentMethod &&
      cardInfo.cardNumber &&
      cardInfo.expiryDate &&
      cardInfo.cvv &&
      cardInfo.cardholderName
    )
  }

  if (isCompleted) {
    return (
      <div className="text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-amber-900 font-mono mb-4">
            Application Submitted Successfully!
          </h2>
          <p className="text-amber-800 font-mono text-lg">
            Your Thailand Digital Arrival Card application has been submitted and is being processed.
          </p>
        </div>

        <div className="bg-gradient-to-r from-amber-200 to-orange-200 rounded-lg p-6 border-2 border-amber-300 mb-8">
          <h3 className="text-xl font-bold text-amber-900 font-mono mb-4">
            What happens next?
          </h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold font-mono text-sm">1</div>
              <p className="text-amber-800 font-mono">We will review your application within 24 hours</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold font-mono text-sm">2</div>
              <p className="text-amber-800 font-mono">You will receive your approved card via email</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold font-mono text-sm">3</div>
              <p className="text-amber-800 font-mono">Present your digital card upon arrival in Thailand</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-amber-800 font-mono mb-4">
            Application Reference: <span className="font-bold">TDAC-{Date.now().toString().slice(-8)}</span>
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold font-mono rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-amber-900 font-mono mb-4">
          Payment Information
        </h2>
        <p className="text-amber-800 font-mono">
          Complete your payment to finalize your Thailand Digital Arrival Card application.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Payment Summary */}
        <div className="bg-gradient-to-r from-amber-200 to-orange-200 rounded-lg p-6 border-2 border-amber-300 mb-8">
          <h3 className="text-xl font-bold text-amber-900 font-mono mb-4">
            Payment Summary
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-amber-800 font-mono">Thailand Digital Arrival Card</span>
              <span className="text-amber-800 font-mono font-bold">$49.99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-amber-800 font-mono">Processing Fee</span>
              <span className="text-amber-800 font-mono font-bold">$5.00</span>
            </div>
            <div className="border-t border-amber-400 pt-2">
              <div className="flex justify-between">
                <span className="text-amber-900 font-mono font-bold text-lg">Total</span>
                <span className="text-amber-900 font-mono font-bold text-lg">$54.99</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-amber-900 font-mono mb-4">
            Payment Method
          </h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="credit"
                checked={formData.paymentMethod === 'credit'}
                onChange={() => handlePaymentMethodChange('credit')}
                className="w-5 h-5 text-amber-600"
              />
              <span className="text-amber-800 font-mono">Credit Card</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="debit"
                checked={formData.paymentMethod === 'debit'}
                onChange={() => handlePaymentMethodChange('debit')}
                className="w-5 h-5 text-amber-600"
              />
              <span className="text-amber-800 font-mono">Debit Card</span>
            </label>
          </div>
        </div>

        {/* Card Information */}
        {formData.paymentMethod && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Card Number *
              </label>
              <input
                type="text"
                value={formData.cardInfo.cardNumber}
                onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                  Expiry Date *
                </label>
                <input
                  type="text"
                  value={formData.cardInfo.expiryDate}
                  onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                  placeholder="MM/YY"
                  maxLength="5"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                  CVV *
                </label>
                <input
                  type="text"
                  value={formData.cardInfo.cvv}
                  onChange={(e) => handleInputChange('cvv', e.target.value)}
                  className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                  placeholder="123"
                  maxLength="4"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Cardholder Name *
              </label>
              <input
                type="text"
                value={formData.cardInfo.cardholderName}
                onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                placeholder="John Doe"
                required
              />
            </div>
          </div>
        )}

        {/* Security Notice */}
        <div className="mt-6 p-4 bg-green-100 border-2 border-green-300 rounded-lg">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-green-800 font-mono text-sm">
              Your payment information is securely encrypted using SSL technology.
            </span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="px-8 py-3 bg-transparent border-2 border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white font-bold font-mono rounded-lg transition-all duration-300"
          >
            ← Back to Travel Information
          </button>
          <button
            type="submit"
            disabled={!isFormValid() || isProcessing}
            className={`px-8 py-3 rounded-lg font-bold font-mono text-lg transition-all duration-300 ${
              isFormValid() && !isProcessing
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isProcessing ? 'Processing Payment...' : 'Complete Payment →'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Step3_Payment
