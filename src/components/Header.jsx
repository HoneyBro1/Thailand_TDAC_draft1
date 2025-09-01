import { useState } from 'react'

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      {/* Red Top Banner */}
      <div className="bg-red-800 text-white text-center py-4">
        <p className="text-base font-semibold" style={{fontFamily: 'Montserrat, sans-serif'}}>Mandatory for all travelers wishing to enter Thailand</p>
      </div>

      {/* Header Bar */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto pl-0 pr-4 sm:pr-6 lg:pr-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo with Flag */}
            <div className="flex items-center">
              <div className="w-12 h-8 mr-4 rounded-sm overflow-hidden border border-gray-400">
                <div className="h-full flex flex-col">
                  <div className="h-1/5 bg-red-800"></div>
                  <div className="h-1/5 bg-white"></div>
                  <div className="h-2/5 bg-blue-900"></div>
                  <div className="h-1/5 bg-white"></div>
                  <div className="h-1/5 bg-red-800"></div>
                </div>
              </div>
                                   <div className="text-3xl" style={{fontFamily: 'Arial, sans-serif'}}>
                       Thailand TDAC
                     </div>
            </div>

            {/* Right Side Buttons */}
            <div className="flex space-x-4">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded border border-gray-300">
                Check Status
              </button>
              <button 
                onClick={() => setCurrentPage('apply')}
                className="bg-red-800 hover:bg-red-900 text-white font-semibold py-3 px-6 rounded"
              >
                Apply For Thailand Digital Arrival Card
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
