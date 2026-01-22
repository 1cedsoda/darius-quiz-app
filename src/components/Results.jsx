import React from 'react';
import './Results.css';

const Results = ({ score, totalQuestions, onRestart, onBackToSelection, personName }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getMessage = () => {
    if (percentage === 100) return "Perfect! 🏆";
    if (percentage >= 80) return "Excellent! 🌟";
    if (percentage >= 60) return "Good job! 👍";
    if (percentage >= 40) return "Not bad! 💪";
    return "Keep learning! 📚";
  };

  return (
    <div className="results-container">
      <div className="results-card">
        <h2 className="results-title">Quiz Complete!</h2>
        <div className="score-circle">
          <div className="score-text">
            <span className="score-number">{score}</span>
            <span className="score-divider">/</span>
            <span className="score-total">{totalQuestions}</span>
          </div>
          <div className="score-percentage">{percentage}%</div>
        </div>
        <p className="results-message">{getMessage()}</p>
        <p className="results-subtitle">
          You got {score} out of {totalQuestions} questions correct about {personName || 'this person'}!
        </p>
        <div className="results-actions">
          <button className="restart-button" onClick={onRestart}>
            Try Again 🔄
          </button>
          {onBackToSelection && (
            <button className="selection-button" onClick={onBackToSelection}>
              Choose Another Person →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
