// Re-export types from tutorial to ensure compatibility
import { 
  TextSlide, 
  QuizSlide, 
  DragDropSlide, 
  MatchingSlide, 
  IdentifySlide, 
  ChecklistSlide, 
  TerminalSlide, 
  SortingSlide, 
  MiniChallengeSlide,
  TutorialSlide
} from "./tutorial";

// Alias for backward compatibility if needed, or just use Tutorial types
export type MissionSlide = TutorialSlide;

export type MissionData = {
  id: string;
  title: string;
  slides: MissionSlide[];
};

// Placeholder for legacy exports if any code imports them
export type QuizOption = { id: string; label: string };

export { 
  TextSlide, 
  QuizSlide, 
  DragDropSlide, 
  MatchingSlide, 
  IdentifySlide, 
  ChecklistSlide, 
  TerminalSlide, 
  SortingSlide, 
  MiniChallengeSlide 
};

// Dummy exports for values not used anymore but to prevent breakages
export const world0Missions = {};
