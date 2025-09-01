import { useState } from 'react'

const CheckStatusPage = () => {
  const [referenceNumber, setReferenceNumber] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckStatus = async (e) => {
    e.preventDefault()
    if (!referenceNumber || !email) return

    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      // Mock status data
      const mockStatus = {
        referenceNumber,
        email,
        status: 'approved', // or 'pending', 'rejected'
        submittedDate: '2024-01-15',
        approvedDate: '2024-01-16',
        expiryDate: '2024-07-16',
        applicantName: 'John Doe',
        nationality: 'United States',
        arrivalDate: '2024-02-01',
        departureDate: '2024-02-15'
      }
      setStatus(mockStatus)
      setIsLoading(false)
    }, 2000)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'approved':
        return 'text-green-600 bg-green-100 border-green-300'
      case 'pending':
        return 'text-yellow-600 bg-yellow-100 border-yellow-300'
      case 'rejected':
        return 'text-red-600 bg-red-100 border-red-300'
      default:
        return 'text-gray-600 bg-gray-100 border-gray-300'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )
      case 'pending':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        )
      case 'rejected':
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 font-mono mb-4">
            Check Application Status
          </h1>
          <p className="text-xl text-amber-800 font-mono">
            Track your Thailand Digital Arrival Card application
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Check Status Form */}
        <div className="bg-white/90 backdrop-blur-sm rounded-lg border-2 border-amber-200 shadow-lg p-8 mb-8">
          <form onSubmit={handleCheckStatus} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Reference Number *
              </label>
              <input
                type="text"
                value={referenceNumber}
                onChange={(e) => setReferenceNumber(e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                placeholder="TDAC-12345678"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-amber-800 font-mono mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border-2 border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 font-mono"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !referenceNumber || !email}
              className={`w-full py-3 rounded-lg font-bold font-mono text-lg transition-all duration-300 ${
                !isLoading && referenceNumber && email
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isLoading ? 'Checking Status...' : 'Check Status'}
            </button>
          </form>
        </div>

        {/* Status Results */}
        {status && (
          <div className="bg-white/90 backdrop-blur-sm rounded-lg border-2 border-amber-200 shadow-lg p-8">
            <div className="text-center mb-6">
              <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg border-2 font-mono font-bold ${getStatusColor(status.status)}`}>
                {getStatusIcon(status.status)}
                <span className="uppercase">{status.status}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-amber-900 font-mono mb-4">
                  Application Details
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-amber-800 font-mono">Reference Number:</span>
                    <span className="text-amber-900 font-mono font-bold">{status.referenceNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800 font-mono">Applicant Name:</span>
                    <span className="text-amber-900 font-mono font-bold">{status.applicantName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800 font-mono">Nationality:</span>
                    <span className="text-amber-900 font-mono font-bold">{status.nationality}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800 font-mono">Submitted Date:</span>
                    <span className="text-amber-900 font-mono font-bold">{status.submittedDate}</span>
                  </div>
                  {status.approvedDate && (
                    <div className="flex justify-between">
                      <span className="text-amber-800 font-mono">Approved Date:</span>
                      <span className="text-amber-900 font-mono font-bold">{status.approvedDate}</span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-amber-900 font-mono mb-4">
                  Travel Information
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-amber-800 font-mono">Arrival Date:</span>
                    <span className="text-amber-900 font-mono font-bold">{status.arrivalDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-800 font-mono">Departure Date:</span>
                    <span className="text-amber-900 font-mono font-bold">{status.departureDate}</span>
                  </div>
                  {status.expiryDate && (
                    <div className="flex justify-between">
                      <span className="text-amber-800 font-mono">Card Expiry:</span>
                      <span className="text-amber-900 font-mono font-bold">{status.expiryDate}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {status.status === 'approved' && (
              <div className="mt-6 p-4 bg-green-100 border-2 border-green-300 rounded-lg">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-green-800 font-mono font-bold">
                    Your Thailand Digital Arrival Card has been approved! You can now travel to Thailand.
                  </span>
                </div>
              </div>
            )}

            {status.status === 'pending' && (
              <div className="mt-6 p-4 bg-yellow-100 border-2 border-yellow-300 rounded-lg">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-yellow-800 font-mono font-bold">
                    Your application is being reviewed. You will receive an email notification once it's processed.
                  </span>
                </div>
              </div>
            )}

            {status.status === 'rejected' && (
              <div className="mt-6 p-4 bg-red-100 border-2 border-red-300 rounded-lg">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-red-800 font-mono font-bold">
                    Your application was not approved. Please contact our support team for assistance.
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Help Section */}
        <div className="mt-8 bg-gradient-to-r from-amber-200 to-orange-200 rounded-lg p-6 border-2 border-amber-300">
          <h3 className="text-xl font-bold text-amber-900 font-mono mb-4">
            Need Help?
          </h3>
          <p className="text-amber-800 font-mono mb-4">
            If you're having trouble checking your application status or need assistance, please contact our support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold font-mono rounded-lg transition-all duration-300">
              Contact Support
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-amber-600 text-amber-800 hover:bg-amber-600 hover:text-white font-bold font-mono rounded-lg transition-all duration-300">
              View FAQs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckStatusPage
