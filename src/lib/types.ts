export interface Flashcard {
  id: number;
  integration: string;
  description: string;
  useCase: string;
  imageUrl: string;
  link: string;
}

export interface FlashcardState {
  currentIndex: number;
  isFlipped: boolean;
  showInfo: boolean;
}

export interface GameQuestion {
  id: number;
  integration: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
} 