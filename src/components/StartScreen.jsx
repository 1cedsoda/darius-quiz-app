import React from 'react';
import './StartScreen.css';

const StartScreen = ({ onStart, quizTitle, quizSubtitle, onBackToSelection }) => {
  return (
    <div className="start-screen">
      <div className="start-content">
        <h1 className="start-title">{quizTitle || 'Darius Göttert Quiz'}</h1>
        <p className="start-subtitle">
          {quizSubtitle || 'How well do you know Darius from Munich?'}
        </p>
        <div className="start-info">
          <div className="info-item">
            <span className="info-icon">❓</span>
            <span className="info-text">10 Questions</span>
          </div>
          <div className="info-item">
            <span className="info-icon">🎯</span>
            <span className="info-text">Multiple Choice</span>
          </div>
          <div className="info-item">
            <span className="info-icon">⏱️</span>
            <span className="info-text">Take your time</span>
          </div>
        </div>
        <button className="start-button" onClick={onStart}>
          Start Quiz
        </button>
        {onBackToSelection && (
          <button className="back-button" onClick={onBackToSelection}>
            ← Back to Selection
          </button>
        )}
      </div>
    </div>
  );
};

export default StartScreen;
