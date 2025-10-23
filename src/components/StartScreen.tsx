import React from 'react';
import { Difficulty } from '../types';

interface StartScreenProps {
    onStart: (difficulty: Difficulty) => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
    const [selectedDifficulty, setSelectedDifficulty] = React.useState<Difficulty>('easy');

    return (
        <div className="start-screen">
            <h1 className="game-title">Hue's that color?</h1>
            <div className="game-description">
                <h2>How to Play</h2>
                <p>Test your color perception skills!</p>
                <ul>
                    <li>You'll see a color swatch displayed on screen</li>
                    <li>Choose the correct hex code from the options below</li>
                    <li>Complete 10 rounds to see your final score</li>
                </ul>
            </div>
            
            <div className="difficulty-selection">
                <h3>Select Difficulty</h3>
                <div className="difficulty-buttons">
                    <button
                        className={`difficulty-btn ${selectedDifficulty === 'easy' ? 'active' : ''}`}
                        onClick={() => setSelectedDifficulty('easy')}
                    >
                        <span className="difficulty-label">Easy</span>
                        <span className="difficulty-desc">2 choices</span>
                    </button>
                    <button
                        className={`difficulty-btn ${selectedDifficulty === 'medium' ? 'active' : ''}`}
                        onClick={() => setSelectedDifficulty('medium')}
                    >
                        <span className="difficulty-label">Medium</span>
                        <span className="difficulty-desc">4 choices</span>
                    </button>
                    <button
                        className={`difficulty-btn ${selectedDifficulty === 'hard' ? 'active' : ''}`}
                        onClick={() => setSelectedDifficulty('hard')}
                    >
                        <span className="difficulty-label">Hard</span>
                        <span className="difficulty-desc">6 choices</span>
                    </button>
                </div>
            </div>

            <button 
                className="start-button" 
                onClick={() => onStart(selectedDifficulty)}
            >
                Start Game
            </button>
        </div>
    );
};

export default StartScreen;
