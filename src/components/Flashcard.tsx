import { useState } from 'react';
import { motion } from 'framer-motion';
import { Flashcard as FlashcardType } from '@/lib/types';
import { Info, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface FlashcardProps {
  card: FlashcardType;
  onNext: () => void;
  isGridCard?: boolean;
}

export default function Flashcard({ card, onNext, isGridCard = false }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`w-full ${isGridCard ? '' : 'max-w-2xl mx-auto'} perspective-1000`}>
      <motion.div
        className={`relative ${isGridCard ? 'h-[300px]' : 'h-[300px] sm:h-[400px]'} cursor-pointer preserve-3d`}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-white rounded-2xl shadow-lg p-6 flex flex-col border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image
                    src={card.imageUrl}
                    alt={`${card.integration} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {card.integration}
                </h2>
              </div>
              <button
                onClick={() => setIsFlipped(true)}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors group"
              >
                <Info className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
              </button>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-700 mb-3">What it does:</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
            </div>
            {!isGridCard && (
              <button
                onClick={onNext}
                className="mt-6 flex items-center justify-center gap-2 bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors group"
              >
                <span className="text-sm font-medium">Next Card</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-white rounded-2xl shadow-lg p-6 flex flex-col border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image
                    src={card.imageUrl}
                    alt={`${card.integration} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {card.integration}
                </h2>
              </div>
              <button
                onClick={() => setIsFlipped(false)}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors group"
              >
                <Info className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
              </button>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-700 mb-3">When to use it:</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{card.useCase}</p>
            </div>
            {!isGridCard && (
              <button
                onClick={onNext}
                className="mt-6 flex items-center justify-center gap-2 bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors group"
              >
                <span className="text-sm font-medium">Next Card</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
} 