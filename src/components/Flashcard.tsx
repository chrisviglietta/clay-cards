import { useState } from 'react';
import { motion } from 'framer-motion';
import { Flashcard as FlashcardType } from '@/lib/types';
import { Info, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface FlashcardProps {
  card: FlashcardType;
  onNext: () => void;
}

export default function Flashcard({ card, onNext }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto perspective-1000">
      <motion.div
        className="relative h-[300px] sm:h-[400px] cursor-pointer preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full bg-white rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col border border-gray-100">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="relative w-8 h-8 sm:w-12 sm:h-12">
                  <Image
                    src={card.imageUrl}
                    alt={`${card.integration} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {card.integration}
                </h2>
              </div>
              <button
                onClick={() => setIsFlipped(true)}
                className="p-1.5 sm:p-2 hover:bg-gray-50 rounded-full transition-colors group"
              >
                <Info className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-gray-600" />
              </button>
            </div>
            <div className="flex-1">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3">What it does:</h3>
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            </div>

            <button
              onClick={onNext}
              className="w-full bg-black text-white py-2 sm:py-3 px-4 rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base font-medium flex items-center justify-center gap-2 group"
            >
              Next Integration
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full bg-white rounded-2xl shadow-lg p-4 sm:p-8 flex flex-col border border-gray-100">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="relative w-8 h-8 sm:w-12 sm:h-12">
                  <Image
                    src={card.imageUrl}
                    alt={`${card.integration} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {card.integration}
                </h2>
              </div>
              <button
                onClick={() => setIsFlipped(false)}
                className="p-1.5 sm:p-2 hover:bg-gray-50 rounded-full transition-colors group"
              >
                <Info className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-gray-600" />
              </button>
            </div>
            <div className="flex-1">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-3">When to Use:</h3>
                <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">{card.useCase}</p>
              </div>
            </div>

            <button
              onClick={onNext}
              className="w-full bg-black text-white py-2 sm:py-3 px-4 rounded-full hover:bg-gray-800 transition-colors text-sm sm:text-base font-medium flex items-center justify-center gap-2 group"
            >
              Next Integration
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 