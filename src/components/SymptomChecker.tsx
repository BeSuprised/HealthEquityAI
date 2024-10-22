import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const symptoms = [
  'Fever', 'Cough', 'Shortness of breath', 'Fatigue', 'Headache',
  'Loss of taste or smell', 'Sore throat', 'Nausea', 'Diarrhea'
];

const SymptomChecker: React.FC = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const checkSymptoms = () => {
    // This is a very basic symptom checker logic. In a real application,
    // this should be backed by a more sophisticated AI model.
    if (selectedSymptoms.length === 0) {
      setResult("Please select at least one symptom.");
    } else if (selectedSymptoms.includes('Fever') && selectedSymptoms.includes('Cough')) {
      setResult("Your symptoms may indicate a respiratory infection. Please consult a healthcare provider.");
    } else if (selectedSymptoms.length > 3) {
      setResult("Based on your multiple symptoms, it's recommended to consult a healthcare provider for a proper diagnosis.");
    } else {
      setResult("Your symptoms don't indicate a severe condition, but monitor them closely. If they persist or worsen, please consult a healthcare provider.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Symptom Checker</h1>
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-xl font-semibold mb-4">Select Your Symptoms</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {symptoms.map(symptom => (
            <button
              key={symptom}
              onClick={() => toggleSymptom(symptom)}
              className={`p-2 rounded-lg ${
                selectedSymptoms.includes(symptom)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {symptom}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={checkSymptoms}
        className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 mb-4"
      >
        Check Symptoms
      </button>
      {result && (
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
            Result
          </h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;