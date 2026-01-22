import React, { useState } from 'react';
import StartScreen from './StartScreen';
import Question from './Question';
import Results from './Results';
import { quizData } from '../quizData';
import { personQuizzes } from '../data/personQuizzes';
import './Quiz.css';

const Quiz = ({ selectedPerson, onBackToSelection }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Get the appropriate quiz data based on selected person
  const getCurrentQuizData = () => {
    if (selectedPerson === 'darius-goettert') {
      return quizData;
    }
    return personQuizzes[selectedPerson] || quizData;
  };

  const activeQuizData = getCurrentQuizData();
  const questions = activeQuizData.questions;

  const handleAnswer = (answerIndex) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setIsAnswered(false);
    setSelectedAnswer(null);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setQuizStarted(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const handleBackToSelection = () => {
    handleRestart();
    if (onBackToSelection) {
      onBackToSelection();
    }
  };

  if (!quizStarted) {
    return (
      <StartScreen 
        onStart={() => setQuizStarted(true)}
        quizTitle={activeQuizData.title}
        quizSubtitle={activeQuizData.subtitle}
        onBackToSelection={onBackToSelection}
      />
    );
  }

  if (showResults) {
    return (
      <Results 
        score={score} 
        totalQuestions={questions.length}
        onRestart={handleRestart}
        onBackToSelection={handleBackToSelection}
        personName={activeQuizData.personName || 'Darius Göttert'}
      />
    );
  }

  return (
    <div className="quiz-container">
      <Question
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
        onNext={handleNext}
        selectedAnswer={selectedAnswer}
        isAnswered={isAnswered}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
      />
    </div>
  );
};

export default Quiz;
