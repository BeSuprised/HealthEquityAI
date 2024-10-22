import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MessageSquare, MapPin, ActivitySquare, BookOpen } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to HealthEquity AI</h1>
      <p className="text-xl mb-8">Empowering underserved communities with AI-driven healthcare access and information.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon={<MessageSquare className="w-12 h-12 text-blue-500" />}
          title="AI Chatbot"
          description="Get answers to your health questions instantly."
          link="/chat"
        />
        <FeatureCard
          icon={<MapPin className="w-12 h-12 text-green-500" />}
          title="Resource Finder"
          description="Locate free or low-cost healthcare services near you."
          link="/resources"
        />
        <FeatureCard
          icon={<ActivitySquare className="w-12 h-12 text-red-500" />}
          title="Symptom Checker"
          description="Check your symptoms and get initial guidance."
          link="/symptoms"
        />
        <FeatureCard
          icon={<BookOpen className="w-12 h-12 text-purple-500" />}
          title="Health Education"
          description="Learn about common health issues and preventive care."
          link="/education"
        />
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string }> = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default LandingPage;