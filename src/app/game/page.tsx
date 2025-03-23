'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { gameQuestions } from '@/lib/gameData';
import { flashcards } from '@/lib/data';
import { Flame, Timer, Trophy, User } from 'lucide-react';
import { getLeaderboard, updateLeaderboard, isHighScore } from '@/lib/leaderboard';
import dynamic from 'next/dynamic';

// Dynamically import react-confetti to avoid SSR issues
const ReactConfetti = dynamic(() => import('react-confetti'), {
  ssr: false
});

export default function GamePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(10);
  const [leaderboard, setLeaderboard] = useState<Array<{ name: string; score: number; date: string }>>([]);
  const [showNameInput, setShowNameInput] = useState(false);
  const [tempScore, setTempScore] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isStreakAnimating, setIsStreakAnimating] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const currentQuestion = gameQuestions[currentIndex];
  const currentFlashcard = flashcards.find(f => f.integration === currentQuestion.integration);

  // Get flame color based on streak - Enhanced with more dramatic colors
  const getFlameColor = (currentStreak: number) => {
    if (currentStreak === 0) return 'text-orange-500';
    if (currentStreak <= 2) return 'text-orange-400 drop-shadow-[0_0_10px_rgba(255,165,0,0.5)]';
    if (currentStreak <= 4) return 'text-orange-500 drop-shadow-[0_0_15px_rgba(255,140,0,0.6)]';
    if (currentStreak <= 6) return 'text-orange-600 drop-shadow-[0_0_20px_rgba(255,120,0,0.7)]';
    if (currentStreak <= 8) return 'text-orange-700 drop-shadow-[0_0_25px_rgba(255,100,0,0.8)]';
    return 'text-orange-800 drop-shadow-[0_0_30px_rgba(255,80,0,0.9)]';
  };

  // Initialize client-side state
  useEffect(() => {
    setMounted(true);
    setLeaderboard(getLeaderboard());
  }, []);

  // Reset game function
  const resetGame = useCallback(() => {
    if (isHighScore(streak)) {
      setTempScore(streak);
      setShowNameInput(true);
    }
    setSelectedOption(null);
    setIsCorrect(null);
    setStreak(0);
    setCurrentIndex(0);
    setTimeLeft(10);
    setIsStreakAnimating(false);
  }, [streak, isHighScore]);

  // Handle name submission
  const handleNameSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    if (name) {
      updateLeaderboard(tempScore, name);
      setShowNameInput(false);
      setTempScore(0);
      setLeaderboard(getLeaderboard());
    }
  };

  // Move to next question function
  const moveToNextQuestion = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    setCurrentIndex((currentIndex + 1) % gameQuestions.length);
    setTimeLeft(10);
    setIsStreakAnimating(false);
  };

  // Countdown timer
  useEffect(() => {
    if (selectedOption !== null) return; // Stop timer if option selected

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Time's up - reset game
          setTimeout(resetGame, 1500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, selectedOption, resetGame]);

  // Shuffle options when currentIndex changes
  useEffect(() => {
    const shuffleArray = (array: string[]) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    setShuffledOptions(shuffleArray(currentQuestion.options));
  }, [currentIndex, currentQuestion.options]);

  // Update window size
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    if (typeof window !== 'undefined') {
      updateWindowSize();
      window.addEventListener('resize', updateWindowSize);
      return () => window.removeEventListener('resize', updateWindowSize);
    }
  }, []);

  const handleOptionClick = (option: string) => {
    if (selectedOption !== null) return;

    setSelectedOption(option);
    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);

    if (correct) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setBestStreak(Math.max(bestStreak, newStreak));
      setIsStreakAnimating(true);
      
      // Show confetti for correct answers
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
      
      setTimeout(moveToNextQuestion, 3000);
    } else {
      setTimeout(resetGame, 1500);
    }
  };

  const getOptionStyles = (option: string) => {
    if (selectedOption === null) {
      return 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-transparent';
    }

    if (option === currentQuestion.correctAnswer) {
      return 'bg-emerald-500 text-white border-transparent';
    }

    if (option === selectedOption && !isCorrect) {
      return 'bg-[#FF5C5C] text-white border-transparent';
    }

    return 'bg-gray-100 text-gray-500 border-gray-200 opacity-50';
  };

  if (!mounted) {
    return null; // or a loading spinner
  }

  return (
    <main className="min-h-screen bg-white">
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={400}
          gravity={0.2}
          initialVelocityY={15}
          initialVelocityX={5}
          tweenDuration={3000}
          colors={['#FFD700', '#FF6B6B', '#4CAF50', '#00B4D8', '#9B59B6']}
        />
      )}
      <Navigation />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12">
        <Image
          src="/flowers-left.svg"
          alt="Decorative flowers"
          width={200}
          height={400}
          className="absolute left-0 top-0 -z-10 hidden sm:block"
        />
        <Image
          src="/flowers-right.svg"
          alt="Decorative flowers"
          width={200}
          height={400}
          className="absolute right-0 top-0 -z-10 hidden sm:block"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="bg-white shadow-sm border border-gray-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 inline-block mb-6 sm:mb-8">
              <span className="text-xs sm:text-sm font-medium text-gray-700 flex items-center gap-2 flex-wrap justify-center">
                Current Streak: 
                <span className="text-gray-900 font-semibold flex items-center">
                  <Flame 
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 transition-all duration-500 transform ${
                      isStreakAnimating 
                        ? 'animate-[bounce_0.5s_ease-in-out_infinite] scale-150 rotate-12' 
                        : ''
                    } ${getFlameColor(streak)}`}
                  />
                  <span className={`transition-all duration-300 ${
                    isStreakAnimating 
                      ? 'scale-125 font-bold text-orange-500'
                      : ''
                  }`}>
                    {streak}
                  </span>
                </span>
                | Best Streak: 
                <span className="text-gray-900 font-semibold">{bestStreak}</span>
                | Time Left: 
                <span className={`text-gray-900 font-semibold flex items-center ${timeLeft <= 3 ? 'text-[#FF5C5C]' : ''}`}>
                  <Timer className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 ${timeLeft <= 3 ? 'text-[#FF5C5C]' : 'text-blue-500'}`} />
                  {timeLeft}s
                </span>
              </span>
            </div>
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              {currentFlashcard && (
                <div className="relative w-8 h-8 sm:w-12 sm:h-12">
                  <Image
                    src={currentFlashcard.imageUrl}
                    alt={`${currentQuestion.integration} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                {currentQuestion.integration}
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              {currentQuestion.question}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {shuffledOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                disabled={selectedOption !== null}
                className={`p-4 sm:p-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] text-left text-sm sm:text-base ${getOptionStyles(option)} ${
                  option === currentQuestion.correctAnswer && selectedOption === option
                    ? 'animate-[pulse_0.5s_ease-in-out_infinite] shadow-lg shadow-emerald-200'
                    : ''
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {(selectedOption || timeLeft === 0) && (
            <div className="mt-6 sm:mt-8 text-center bg-gray-50 rounded-lg p-4 sm:p-6">
              {timeLeft === 0 ? (
                <p className="text-base sm:text-lg font-medium text-[#FF5C5C]">
                  Time&apos;s up! The game will restart.
                </p>
              ) : (
                <p className={`text-base sm:text-lg font-medium ${isCorrect ? 'text-emerald-500' : 'text-[#FF5C5C]'}`}>
                  {isCorrect ? 'Correct!' : 'Incorrect!'} {currentQuestion.explanation}
                </p>
              )}
            </div>
          )}

          {/* Leaderboard */}
          <div className="mt-12 sm:mt-16">
            <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">Top 4 Scores</h3>
              </div>
              <div className="space-y-2">
                {leaderboard.map((entry, index) => (
                  <div key={index} className="flex items-center justify-between py-1.5 sm:py-2 border-b border-gray-100 last:border-0">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xs sm:text-sm font-medium text-gray-500">#{index + 1}</span>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                        <span className="text-xs sm:text-sm font-medium text-gray-900">{entry.name}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
                      <span className="text-xs sm:text-sm font-semibold text-gray-900">{entry.score}</span>
                    </div>
                  </div>
                ))}
                {leaderboard.length === 0 && (
                  <p className="text-xs sm:text-sm text-gray-500 text-center py-3 sm:py-4">No high scores yet. Be the first!</p>
                )}
              </div>
            </div>
          </div>

          {/* Name Input Modal */}
          {showNameInput && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl p-4 sm:p-6 max-w-md w-full mx-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">New High Score: {tempScore}!</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">Enter your name to be added to the leaderboard.</p>
                <form onSubmit={handleNameSubmit} className="space-y-3 sm:space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-3 sm:px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base text-gray-900 placeholder-gray-500"
                    maxLength={20}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm sm:text-base"
                  >
                    Save Score
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
} 