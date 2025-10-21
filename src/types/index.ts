export type Difficulty = 'easy' | 'medium' | 'hard';

export interface GameState {
    currentColor: string;
    choices: string[];
    score: number;
    attempts: number;
    difficulty: Difficulty;
}

export interface ChoiceButtonProps {
    choice: string;
    onSelect: (choice: string) => void;
}

export interface ColorSwatchProps {
    color: string;
}

export interface ModeSelectorProps {
    selectedMode: Difficulty;
    onModeChange: (mode: Difficulty) => void;
}

export interface ScoreBoardProps {
    score: number;
    attempts: number;
}