import React, { useState } from 'react';
import Quiz from './components/Quiz';
import PersonSelector from './components/PersonSelector';
import './App.css';

function App() {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleSelectPerson = (personId) => {
    setSelectedPerson(personId);
  };

  const handleBackToSelection = () => {
    setSelectedPerson(null);
  };

  // If no person selected, show selection screen
  if (!selectedPerson) {
    return (
      <div className="App">
        <PersonSelector onSelectPerson={handleSelectPerson} />
      </div>
    );
  }

  // Show quiz for selected person
  return (
    <div className="App">
      <Quiz 
        selectedPerson={selectedPerson} 
        onBackToSelection={handleBackToSelection}
      />
    </div>
  );
}

export default App;
