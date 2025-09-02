// src/App.jsx

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your components and pages
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ApplyPage from './pages/ApplyPage';
import CheckStatusPage from './pages/CheckStatusPage';

function App() {
  return (
    // Wrap your entire application in the <Router> component
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header is outside <Routes> so it appears on every page */}
        <Header />
        
        <main className="flex-grow">
          {/* <Routes> replaces your switch statement. It renders the component
              that matches the current URL path. */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/check-status" element={<CheckStatusPage />} />
          </Routes>
        </main>

        {/* Footer is also outside <Routes> to appear on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;