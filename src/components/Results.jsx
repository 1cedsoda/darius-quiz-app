import React from 'react';
import './Results.css';

const Results = ({ score, totalQuestions, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getResultMessage = () => {
    if (percentage === 100) return "Perfect! You're a Darius Göttert expert! 🌟";
    if (percentage >= 80) return "Excellent! You know Darius very well! 🎉";
    if (percentage >= 60) return "Good job! You have solid knowledge! 👍";
    if (percentage >= 40) return "Not bad! Keep learning! 📚";
    return "You might want to learn more about Darius! 💡";
  };

  return (
    <div className="results-container">
      <div className="results-content">
        <h1 className="results-title">Quiz Complete!</h1>
        
        <div className="score-circle">
          <div className="score-number">{percentage}%</div>
          <div className="score-label">{score} / {totalQuestions} correct</div>
        </div>

        <p className="result-message">{getResultMessage()}</p>

        <button className="restart-button" onClick={onRestart}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Results;
