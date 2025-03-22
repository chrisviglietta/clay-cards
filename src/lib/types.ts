export interface Flashcard {
  id: number;
  integration: string;
  description: string;
  useCase: string;
  imageUrl: string;
}

export interface FlashcardState {
  currentIndex: number;
  isFlipped: boolean;
  showInfo: boolean;
} 