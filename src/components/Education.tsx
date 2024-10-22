import React from 'react';
import { BookOpen, Heart, Shield } from 'lucide-react';

const educationTopics = [
  {
    title: "Understanding Chronic Diseases",
    icon: <Heart className="w-8 h-8 text-red-500" />,
    content: "Learn about common chronic diseases, their symptoms, and management strategies."
  },
  {
    title: "Preventive Care Essentials",
    icon: <Shield className="w-8 h-8 text-green-500" />,
    content: "Discover the importance of regular check-ups, vaccinations, and healthy lifestyle choices."
  },
  {
    title: "Mental Health Awareness",
    icon: <BookOpen className="w-8 h-8 text-blue-500" />,
    content: "Explore mental health topics, coping strategies, and available resources for support."
  }
];

const Education: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Health Education Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationTopics.map((topic, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              {topic.icon}
              <h2 className="text-xl font-semibold ml-2">{topic.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{topic.content}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Learn More
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-gray-100 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Centers for Disease Control and Prevention (CDC)</li>
          <li>World Health Organization (WHO)</li>
          <li>National Institutes of Health (NIH)</li>
          <li>Local Health Department Resources</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;