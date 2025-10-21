import React from 'react';
import { Difficulty } from '../types';

interface ModeSelectorProps {
  difficulty: Difficulty;
  setDifficulty: (mode: Difficulty) => void;
}

const modes = [
  { label: 'Easy', value: 'easy' as Difficulty },
  { label: 'Medium', value: 'medium' as Difficulty },
  { label: 'Hard', value: 'hard' as Difficulty },
];

const ModeSelector: React.FC<ModeSelectorProps> = ({ difficulty, setDifficulty }) => {
  return (
    <div className="mode-selector">
      <h2>Select Difficulty</h2>
      <div className="mode-buttons">
        {modes.map((mode) => (
          <button
            key={mode.value}
            className={`mode-button ${difficulty === mode.value ? 'active' : ''}`}
            onClick={() => setDifficulty(mode.value)}
          >
            {mode.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModeSelector;