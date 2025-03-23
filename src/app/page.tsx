'use client';

import { useState } from 'react';
import { flashcards } from '@/lib/data';
import Flashcard from '@/components/Flashcard';
import Navigation from '@/components/Navigation';
import FloatingBalls from '@/components/FloatingBalls';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };

  return (
    <main className="min-h-screen bg-[#fafafa] relative">
      <Navigation />
      <FloatingBalls />
      
      {/* Decorative flowers */}
      <div className="absolute left-0 top-1/4 w-32 h-32 sm:w-48 sm:h-48 -translate-x-1/4 hidden sm:block">
        <Image src="/flowers-left.svg" alt="Decorative flowers" width={200} height={200} />
      </div>
      <div className="absolute right-0 bottom-1/4 w-32 h-32 sm:w-48 sm:h-48 translate-x-1/4 hidden sm:block">
        <Image src="/flowers-right.svg" alt="Decorative flowers" width={200} height={200} />
      </div>

      <div className="max-w-4xl mx-auto pt-24 sm:pt-32 px-4 relative z-10">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
          Clay Integrations
        </h1>
        <p className="text-base sm:text-xl text-center text-gray-600 mb-8 sm:mb-12">
          Learn about 100+ premium data sources and AI research agents in one platform
        </p>
        
        <div className="mb-6 sm:mb-8 text-center">
          <span className="text-sm sm:text-base text-gray-500 font-medium">
            Integration {currentIndex + 1} of {flashcards.length}
          </span>
        </div>

        <Flashcard
          card={flashcards[currentIndex]}
          onNext={handleNext}
        />
      </div>
      <Footer />
    </main>
  );
}
