import React, { useState, useEffect } from 'react';
import ColorSwatch from './components/ColorSwatch';
import ChoiceButton from './components/ChoiceButton';
import ModeSelector from './components/ModeSelector';
import ScoreBoard from './components/ScoreBoard';
import { generateChoices } from './utils/generateChoices';
import { colors } from './utils/colors';
import { Difficulty } from './types';

const App: React.FC = () => {
    const [difficulty, setDifficulty] = useState<Difficulty>('easy');
    const [currentColor, setCurrentColor] = useState<string>('');
    const [choices, setChoices] = useState<string[]>([]);
    const [score, setScore] = useState<number>(0);
    const [attempts, setAttempts] = useState<number>(0);

    useEffect(() => {
        startNewGame();
    }, [difficulty]);

    const startNewGame = () => {
        const color = getRandomColor();
        setCurrentColor(color);
        const newChoices = generateChoices(color, difficulty);
        setChoices(newChoices);
        setAttempts(0);
    };

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const handleChoice = (choice: string) => {
        setAttempts(attempts + 1);
        if (choice === currentColor) {
            setScore(score + 1);
            startNewGame();
        }
    };

    return (
        <div className="app">
            <h1>Color Guessing Game</h1>
            <ModeSelector difficulty={difficulty} setDifficulty={setDifficulty} />
            <ColorSwatch color={currentColor} />
            <div className="choices">
                {choices.map((choice, index) => (
                    <ChoiceButton key={index} choice={choice} onSelect={handleChoice} />
                ))}
            </div>
            <ScoreBoard score={score} attempts={attempts} />
        </div>
    );
};

export default App;