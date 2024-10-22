import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const ResourceFinder: React.FC = () => {
  const [location, setLocation] = useState('');
  const [resources, setResources] = useState<string[]>([]);

  const handleSearch = () => {
    // TODO: Integrate with a real healthcare resource API
    const mockResources = [
      'Community Health Center - 123 Main St',
      'Free Clinic - 456 Oak Ave',
      'Mental Health Services - 789 Pine Rd',
      'Dental Care Program - 321 Elm St',
    ];
    setResources(mockResources);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Find Healthcare Resources</h1>
      <div className="mb-4 flex">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-grow border rounded-l-lg p-2"
          placeholder="Enter your location..."
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white p-2 rounded-r-lg hover:bg-green-600"
        >
          <Search className="w-6 h-6" />
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Nearby Resources</h2>
        {resources.length > 0 ? (
          <ul className="space-y-2">
            {resources.map((resource, index) => (
              <li key={index} className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-green-500" />
                {resource}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Enter a location to find healthcare resources near you.</p>
        )}
      </div>
    </div>
  );
};

export default ResourceFinder;