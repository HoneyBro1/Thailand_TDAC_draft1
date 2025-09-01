


import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ApplyPage from './pages/ApplyPage'
import CheckStatusPage from './pages/CheckStatusPage'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'apply':
        return <ApplyPage />
      case 'check-status':
        return <CheckStatusPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 pixel-grid">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
