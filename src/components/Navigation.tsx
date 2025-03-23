'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const isGamePage = pathname === '/game';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 px-4 py-3 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-5 sm:w-8 sm:h-6"
            >
              <path
                d="M2 22C2 22 7 8 16 8C25 8 30 22 30 22"
                stroke="#00B4D8"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M6 18C6 18 9 10 16 10C23 10 26 18 26 18"
                stroke="#FF6B6B"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M10 14C10 14 12 12 16 12C20 12 22 14 22 14"
                stroke="#FFD93D"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-base sm:text-lg font-semibold text-gray-900">
              Clay Integrations Battle Royale
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/"
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
              !isGamePage
                ? 'bg-black text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Flashcards
          </Link>
          <Link
            href="/game"
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
              isGamePage
                ? 'bg-black text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Game
          </Link>
        </div>
      </div>
    </nav>
  );
} 