'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { flashcards } from '@/lib/data';
import { Flame, Timer } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import react-confetti to avoid SSR issues
const ReactConfetti = dynamic(() => import('react-confetti'), {
  ssr: false
});

const GROWTH_STAGES = [
  { scale: 0.3, rotate: -5, color: 'bg-green-200' },
  { scale: 0.5, rotate: 0, color: 'bg-green-300' },
  { scale: 0.7, rotate: 5, color: 'bg-green-400' },
  { scale: 0.85, rotate: 2, color: 'bg-green-500' },
  { scale: 1, rotate: 0, color: 'bg-green-600' },
];

const FLOWER_COLORS = [
  'bg-pink-400',
  'bg-purple-400',
  'bg-yellow-400',
  'bg-blue-400',
  'bg-red-400',
];

export default function QuizPage() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isHighScore, setIsHighScore] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isStreakAnimating, setIsStreakAnimating] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);
  const [growthStage, setGrowthStage] = useState(0);
  const [flowers, setFlowers] = useState<Array<{ x: number; color: string }>>([]);

  // Get flame color based on streak
  const getFlameColor = (currentStreak: number) => {
    if (currentStreak === 0) return 'text-orange-500';
    if (currentStreak <= 2) return 'text-orange-400 drop-shadow-[0_0_10px_rgba(255,165,0,0.5)]';
    if (currentStreak <= 4) return 'text-orange-500 drop-shadow-[0_0_15px_rgba(255,140,0,0.6)]';
    if (currentStreak <= 6) return 'text-orange-600 drop-shadow-[0_0_20px_rgba(255,120,0,0.7)]';
    if (currentStreak <= 8) return 'text-orange-700 drop-shadow-[0_0_25px_rgba(255,100,0,0.8)]';
    return 'text-orange-800 drop-shadow-[0_0_30px_rgba(255,80,0,0.9)]';
  };

  // Get 4 random integrations for options
  const getRandomOptions = useCallback(() => {
    const allIntegrations = flashcards.map(card => card.integration);
    const currentIntegration = flashcards[currentCardIndex].integration;
    const otherIntegrations = allIntegrations.filter(integration => integration !== currentIntegration);
    
    // Shuffle other integrations and take 3
    const shuffled = otherIntegrations.sort(() => 0.5 - Math.random());
    const threeOthers = shuffled.slice(0, 3);
    
    // Combine with correct answer and shuffle
    const options = [...threeOthers, currentIntegration].sort(() => 0.5 - Math.random());
    return options;
  }, [currentCardIndex]);

  const [options, setOptions] = useState<string[]>([]);

  // Initialize client-side state
  useEffect(() => {
    setMounted(true);
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setOptions(getRandomOptions());
    setSelectedOption(null);
    setShowAnswer(false);
    setIsCorrect(null);
    setTimeLeft(10);
    setIsStreakAnimating(false);
  }, [currentCardIndex, getRandomOptions]);

  // Countdown timer
  useEffect(() => {
    if (showAnswer) return; // Stop timer if answer shown

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Time's up - reset everything
          setStreak(0);
          setShowAnswer(true);
          setGrowthStage(0);
          setFlowers([]);
          setTimeout(() => {
            setCurrentCardIndex(0);
            setScore(0);
            setShowAnswer(false);
            setSelectedOption(null);
            setIsCorrect(null);
            setTimeLeft(10);
          }, 1500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentCardIndex, showAnswer]);

  const handleOptionSelect = (index: number) => {
    if (showAnswer) return;
    
    setSelectedOption(index);
    const isCorrectAnswer = options[index] === flashcards[currentCardIndex].integration;
    setIsCorrect(isCorrectAnswer);
    setShowAnswer(true);

    if (isCorrectAnswer) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setBestStreak(Math.max(bestStreak, newStreak));
      setIsStreakAnimating(true);
      setScore(prev => {
        const newScore = prev + 100;
        if (newScore > highScore) {
          setHighScore(newScore);
          setIsHighScore(true);
        }
        return newScore;
      });
      
      // Update growth stage and add flowers
      setGrowthStage(prev => {
        const newStage = Math.min(prev + 1, GROWTH_STAGES.length - 1);
        // Add a new flower when reaching certain stages
        if (newStage > 0 && newStage % 2 === 0) {
          const randomX = Math.random() * 80 + 10; // Random position between 10% and 90%
          const randomColor = FLOWER_COLORS[Math.floor(Math.random() * FLOWER_COLORS.length)];
          setFlowers(prev => [...prev, { x: randomX, color: randomColor }]);
        }
        return newStage;
      });
      
      // Show confetti for correct answers
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    } else {
      setStreak(0);
      // Reset growth on wrong answer
      setGrowthStage(0);
      setFlowers([]);
    }
  };

  const handleNext = useCallback(() => {
    setCurrentCardIndex(prev => (prev + 1) % flashcards.length);
  }, []);

  const currentCard = flashcards[currentCardIndex];

  const formatQuestion = (card: typeof currentCard) => {
    const useCase = card.useCase.toLowerCase();
    const description = card.description.toLowerCase();
    
    // Create specific questions based on unique features
    if (description.includes('phone') && description.includes('social')) {
      return "Need to extract phone numbers from someone's social media profile? Which tool should you use?";
    }
    if (description.includes('linkedin')) {
      return "Looking to convert LinkedIn URLs into mobile numbers and personal emails? Which solution fits best?";
    }
    if (description.includes('australian')) {
      return "Searching for contact details specifically for leads in Australia? Which data solution specializes in this region?";
    }
    if (description.includes('fundraising')) {
      return "Want to track investment rounds and company funding history? Which data provider should you pick?";
    }
    if (description.includes('influencer')) {
      return "Need to analyze and gather data about social media influencers? Which platform is your best choice?";
    }
    if (description.includes('mobile') && description.includes('work email')) {
      return "Want to find both work emails and phone numbers in one search? Which solution offers this combo?";
    }
    if (description.includes('validate') && description.includes('email')) {
      return "Need to check if business emails are valid and sort them by department? Which service fits your needs?";
    }
    if (description.includes('airtable')) {
      return "Want to automate your Airtable database updates and record management? Which connector works best?";
    }
    if (description.includes('google sheets')) {
      return "Looking to sync and manage your spreadsheet data automatically? Which solution integrates seamlessly?";
    }
    if (description.includes('llm') || description.includes('gemini')) {
      return "Want to leverage cutting-edge AI for natural language tasks? Which service powers up your NLP?";
    }
    if (description.includes('bounce') || description.includes('invalid')) {
      return "Need guaranteed deliverable B2B email addresses with zero bounces? Which email finder fits the bill?";
    }
    if (description.includes('department') && description.includes('filter')) {
      return "Want to find verified emails with smart department filtering? Which email tool matches your needs?";
    }
    if (description.includes('campaign') && description.includes('lead')) {
      return "Need to quickly add new leads into your marketing campaigns? Which automation tool speeds this up?";
    }
    
    // If no specific match, create a question from the description
    const cleanDescription = description
      .replace('in clay:', '')
      .replace('coming soon', '')
      .replace(card.integration, 'this')
      .trim();
      
    return `Looking to ${cleanDescription}? Which tool matches your needs?`;
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative">
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
      
      <div className="pt-24 pb-64 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Integration Quiz
            </h1>
            <div className="bg-white shadow-sm border border-gray-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 inline-block">
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
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentCardIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
            >
              <div className="flex items-center gap-6 mb-6">
                {currentCard.imageUrl && (
                  <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={currentCard.imageUrl}
                      alt={currentCard.integration}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                    {formatQuestion(currentCard)}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    disabled={showAnswer}
                    className={`p-4 rounded-xl text-left transition-all ${
                      showAnswer
                        ? index === options.indexOf(currentCard.integration)
                          ? 'bg-green-100 border-2 border-green-500'
                          : selectedOption === index
                          ? 'bg-red-100 border-2 border-red-500'
                          : 'bg-gray-50 border border-gray-200'
                        : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {showAnswer && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Next Question
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Garden section */}
      <div className="absolute bottom-16 left-0 right-0 h-48 overflow-hidden">
        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-amber-100 to-amber-50" />
        
        {/* Stem */}
        <motion.div
          className={`absolute bottom-0 left-1/2 w-3 -translate-x-1/2 origin-bottom ${
            GROWTH_STAGES[growthStage].color
          }`}
          initial={{ height: 0 }}
          animate={{ 
            height: `${Math.max(growthStage * 20, 0)}%`,
            rotate: GROWTH_STAGES[growthStage].rotate
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Flower head */}
          <motion.div
            className="absolute -left-4 -top-8 w-10 h-10 rounded-full bg-yellow-300"
            initial={{ scale: 0 }}
            animate={{ 
              scale: GROWTH_STAGES[growthStage].scale,
              rotate: GROWTH_STAGES[growthStage].rotate * -1
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Petals */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-8 h-8 rounded-full bg-pink-400"
                initial={{ scale: 0 }}
                animate={{ scale: GROWTH_STAGES[growthStage].scale }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 72}deg) translateY(-16px) translateX(-50%)`
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Additional flowers */}
        {flowers.map((flower, index) => (
          <motion.div
            key={index}
            className="absolute bottom-0"
            style={{ left: `${flower.x}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`w-8 h-16 ${flower.color}`} style={{ borderRadius: '50% 50% 0 0' }} />
            <div className="w-2 h-20 bg-green-500" />
          </motion.div>
        ))}
      </div>

      <Footer />
    </main>
  );
} 