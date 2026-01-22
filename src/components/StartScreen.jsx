import React from 'react';
import './StartScreen.css';

const StartScreen = ({ onStart, quizTitle, quizSubtitle }) => {
  return (
    <div className="start-screen">
      <div className="start-content">
        <h1 className="quiz-title">{quizTitle}</h1>
        <p className="quiz-subtitle">{quizSubtitle}</p>
        <div className="start-info">
          <p>Test your knowledge about Darius Göttert!</p>
          <p>Answer multiple choice questions and see how well you score.</p>
        </div>
        <button className="start-button" onClick={onStart}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
