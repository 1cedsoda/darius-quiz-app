import React from 'react';
import './PersonSelector.css';

const PersonSelector = ({ onSelectPerson }) => {
  const persons = [
    {
      id: 'darius-goettert',
      name: 'Darius Göttert',
      description: 'Venture Builder, Young Founders Fund GP',
      emoji: '🚀',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'ben-erler',
      name: 'Ben Erler',
      description: 'Chairman Young Founders Network',
      emoji: '💼',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)'
    },
    {
      id: 'philipp-schmechel',
      name: 'Philipp Schmechel',
      description: 'Trimlog & QiTech Founder',
      emoji: '⚡',
      gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)'
    },
    {
      id: 'katharina-ziesse-suari',
      name: 'Katharina Zieße Suari',
      description: 'LMU Student, Marketing & Videografie',
      emoji: '🎨',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #9333ea 100%)'
    }
  ];

  return (
    <div className="person-selector">
      <div className="selector-container">
        <div className="selector-header">
          <h1 className="selector-title">👥 Person Quiz</h1>
          <p className="selector-subtitle">
            Wähle eine Person und teste dein Wissen!
          </p>
        </div>

        <div className="person-grid">
          {persons.map((person) => (
            <div
              key={person.id}
              className="person-card"
              onClick={() => onSelectPerson(person.id)}
              style={{ background: person.gradient }}
            >
              <div className="person-emoji">{person.emoji}</div>
              <h3 className="person-name">{person.name}</h3>
              <p className="person-description">{person.description}</p>
              <div className="person-stats">
                <span className="stat-badge">10 Fragen</span>
              </div>
              <button className="start-quiz-btn">
                Quiz starten →
              </button>
            </div>
          ))}
        </div>

        <div className="info-box">
          <p className="info-text">
            ✨ Jedes Quiz enthält 10 spannende Fragen über die Person.
            Sammle Punkte und lerne mehr über Deutschlands Gründer-Community!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonSelector;
