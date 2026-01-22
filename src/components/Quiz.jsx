import React, { useState } from 'react';
import StartScreen from './StartScreen';
import Question from './Question';
import Results from './Results';
import { quizData } from '../quizData';
import './Quiz.css';

const Quiz = () => {
  const [quizState, setQuizState] = useState('start'); // 'start', 'quiz', 'results'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setQuizState('quiz');
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizState('results');
    }
  };

  const handleRestart = () => {
    setQuizState('start');
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <div className="quiz-app">
      {quizState === 'start' && (
        <StartScreen 
          onStart={handleStart}
          quizTitle={quizData.title}
          quizSubtitle={quizData.subtitle}
        />
      )}

      {quizState === 'quiz' && (
        <Question
          question={quizData.questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={quizData.questions.length}
        />
      )}

      {quizState === 'results' && (
        <Results
          score={score}
          totalQuestions={quizData.questions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default Quiz;
