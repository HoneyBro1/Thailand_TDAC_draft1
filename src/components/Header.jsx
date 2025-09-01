import { useState } from 'react'

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-amber-800 to-orange-900 shadow-2xl border-b-4 border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-3xl font-bold text-amber-100 retro-text tracking-wider">
              <span className="text-orange-300">THAILAND</span>
              <br />
              <span className="text-amber-200 text-xl">TDAC</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-4 py-2 retro-button font-mono text-sm font-bold transition-all duration-300 ${
                currentPage === 'home'
                  ? 'bg-amber-600 text-amber-100 shadow-lg transform scale-105'
                  : 'text-amber-200 hover:bg-amber-700 hover:text-amber-100'
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => setCurrentPage('apply')}
              className={`px-4 py-2 retro-button font-mono text-sm font-bold transition-all duration-300 ${
                currentPage === 'apply'
                  ? 'bg-amber-600 text-amber-100 shadow-lg transform scale-105'
                  : 'text-amber-200 hover:bg-amber-700 hover:text-amber-100'
              }`}
            >
              APPLY
            </button>
            <button
              onClick={() => setCurrentPage('check-status')}
              className={`px-4 py-2 retro-button font-mono text-sm font-bold transition-all duration-300 ${
                currentPage === 'check-status'
                  ? 'bg-amber-600 text-amber-100 shadow-lg transform scale-105'
                  : 'text-amber-200 hover:bg-amber-700 hover:text-amber-100'
              }`}
            >
              CHECK STATUS
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-200 hover:text-amber-100 focus:outline-none focus:text-amber-100"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-amber-800 rounded-lg mt-2">
              <button
                onClick={() => {
                  setCurrentPage('home')
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left px-3 py-2 rounded-md font-mono text-sm font-bold ${
                  currentPage === 'home'
                    ? 'bg-amber-600 text-amber-100'
                    : 'text-amber-200 hover:bg-amber-700 hover:text-amber-100'
                }`}
              >
                HOME
              </button>
              <button
                onClick={() => {
                  setCurrentPage('apply')
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left px-3 py-2 rounded-md font-mono text-sm font-bold ${
                  currentPage === 'apply'
                    ? 'bg-amber-600 text-amber-100'
                    : 'text-amber-200 hover:bg-amber-700 hover:text-amber-100'
                }`}
              >
                APPLY
              </button>
              <button
                onClick={() => {
                  setCurrentPage('check-status')
                  setIsMenuOpen(false)
                }}
                className={`block w-full text-left px-3 py-2 rounded-md font-mono text-sm font-bold ${
                  currentPage === 'check-status'
                    ? 'bg-amber-600 text-amber-100'
                    : 'text-amber-200 hover:bg-amber-700 hover:text-amber-100'
                }`}
              >
                CHECK STATUS
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
