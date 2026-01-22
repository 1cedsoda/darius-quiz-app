import React, { useState } from 'react';
import './Question.css';

const Question = ({ question, onAnswer, currentQuestion, totalQuestions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerClick = (index) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    onAnswer(selectedAnswer === question.correctAnswer);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  return (
    <div className="question-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
        ></div>
      </div>
      
      <div className="question-header">
        <span className="question-number">Question {currentQuestion} of {totalQuestions}</span>
      </div>

      <h2 className="question-text">{question.question}</h2>

      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedAnswer === index
                ? index === question.correctAnswer
                  ? 'correct'
                  : 'incorrect'
                : selectedAnswer !== null && index === question.correctAnswer
                ? 'correct'
                : ''
            }`}
            onClick={() => handleAnswerClick(index)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="explanation">
          <p className={selectedAnswer === question.correctAnswer ? 'correct-text' : 'incorrect-text'}>
            {selectedAnswer === question.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          <p>{question.explanation}</p>
          <button className="next-button" onClick={handleNext}>
            {currentQuestion === totalQuestions ? 'See Results' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;
