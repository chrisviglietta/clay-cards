'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname();
  const isGamePage = pathname === '/game';

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 px-4 py-3 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Image
              src="/clay-logo.svg"
              alt="Clay Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-lg font-semibold text-gray-900">
              Clay Integrations Battle Royale
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !isGamePage
                ? 'bg-black text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Flashcards
          </Link>
          <Link
            href="/game"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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