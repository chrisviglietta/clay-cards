'use client';

import { useEffect, useState } from 'react';

interface Ball {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingBalls() {
  const [balls, setBalls] = useState<Ball[]>([]);

  useEffect(() => {
    // Generate 20 balls with random positions and sizes
    const newBalls = Array.from({ length: 20 }, (_, index) => ({
      id: index,
      x: Math.random() * 100, // Random x position (0-100%)
      y: Math.random() * 100, // Random y position (0-100%)
      size: Math.random() * 40 + 20, // Random size between 20-60px
      duration: Math.random() * 20 + 10, // Random duration between 10-30s
      delay: Math.random() * -20, // Random delay between 0-20s
    }));
    setBalls(newBalls);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {balls.map((ball) => (
        <div
          key={ball.id}
          className="absolute rounded-full bg-gradient-to-br from-blue-50 to-blue-100/50"
          style={{
            left: `${ball.x}%`,
            top: `${ball.y}%`,
            width: `${ball.size}px`,
            height: `${ball.size}px`,
            animation: `float ${ball.duration}s ease-in-out infinite`,
            animationDelay: `${ball.delay}s`,
            opacity: 0.3,
          }}
        />
      ))}
    </div>
  );
} 