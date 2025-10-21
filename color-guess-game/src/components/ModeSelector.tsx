import React from 'react';

interface ModeSelectorProps {
  selectedMode: string;
  onModeChange: (mode: string) => void;
}

const modes = [
  { label: 'Easy', value: 'easy' },
  { label: 'Medium', value: 'medium' },
  { label: 'Hard', value: 'hard' },
];

const ModeSelector: React.FC<ModeSelectorProps> = ({ selectedMode, onModeChange }) => {
  return (
    <div>
      <h2>Select Difficulty Mode</h2>
      <div>
        {modes.map((mode) => (
          <label key={mode.value}>
            <input
              type="radio"
              value={mode.value}
              checked={selectedMode === mode.value}
              onChange={() => onModeChange(mode.value)}
            />
            {mode.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ModeSelector;