import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="w-8 h-8" />
            <span className="text-xl font-bold">HealthEquity AI</span>
          </Link>
          <div className="space-x-4">
            <Link to="/chat" className="hover:text-blue-200">Chat</Link>
            <Link to="/resources" className="hover:text-blue-200">Resources</Link>
            <Link to="/symptoms" className="hover:text-blue-200">Symptoms</Link>
            <Link to="/education" className="hover:text-blue-200">Education</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;