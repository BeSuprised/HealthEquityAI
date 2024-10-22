import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ChatBot from './components/ChatBot';
import ResourceFinder from './components/ResourceFinder';
import SymptomChecker from './components/SymptomChecker';
import Education from './components/Education';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/chat" element={<ChatBot />} />
            <Route path="/resources" element={<ResourceFinder />} />
            <Route path="/symptoms" element={<SymptomChecker />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;