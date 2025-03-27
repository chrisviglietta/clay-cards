'use client';

import { useState } from 'react';
import { flashcards } from '@/lib/data';
import Flashcard from '@/components/Flashcard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function NewGamePage() {
  return (
    <main className="min-h-screen bg-[#fafafa] relative">
      <Navigation />
      
      {/* Decorative flowers */}
      <div className="absolute left-0 top-1/4 w-32 h-32 sm:w-48 sm:h-48 -translate-x-1/4 hidden sm:block">
        <Image src="/flowers-left.svg" alt="Decorative flowers" width={200} height={200} />
      </div>
      <div className="absolute right-0 bottom-1/4 w-32 h-32 sm:w-48 sm:h-48 translate-x-1/4 hidden sm:block">
        <Image src="/flowers-right.svg" alt="Decorative flowers" width={200} height={200} />
      </div>

      <div className="max-w-7xl mx-auto pt-24 sm:pt-32 px-4 relative z-10">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-gray-900 mb-3 sm:mb-4">
          All Integrations
        </h1>
        <p className="text-base sm:text-xl text-center text-gray-600 mb-12 sm:mb-16">
          Explore all 60+ premium data sources and AI research agents
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {flashcards.map((card, index) => (
            <div key={card.id} className="h-[300px]">
              <Flashcard
                card={card}
                onNext={() => {}}
                isGridCard={true}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
} 