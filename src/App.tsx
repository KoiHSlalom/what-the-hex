import React, { useState, useEffect } from 'react';
import ColorSwatch from './components/ColorSwatch';
import ChoiceButton from './components/ChoiceButton';
import ScoreBoard from './components/ScoreBoard';
import StartScreen from './components/StartScreen';
import EndScreen from './components/EndScreen';
import { generateChoices } from './utils/generateChoices';
import { colors } from './utils/colors';
import { Difficulty } from './types';

type GameScreen = 'start' | 'playing' | 'end';

const TOTAL_ROUNDS = 10;

const App: React.FC = () => {
    const [gameScreen, setGameScreen] = useState<GameScreen>('start');
    const [difficulty, setDifficulty] = useState<Difficulty>('easy');
    const [currentColor, setCurrentColor] = useState<string>('');
    const [previousColor, setPreviousColor] = useState<string>('');
    const [choices, setChoices] = useState<string[]>([]);
    const [score, setScore] = useState<number>(0);
    const [currentRound, setCurrentRound] = useState<number>(1);
    const [selectedChoice, setSelectedChoice] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const startNewRound = () => {
        const color = getRandomColor();
        setCurrentColor(color);
        setPreviousColor(color);
        const newChoices = generateChoices(color, difficulty);
        setChoices(newChoices);
        setSelectedChoice('');
        setIsCorrect(null);
    };

    const getRandomColor = () => {
        let color;
        let attempts = 0;
        const maxAttempts = 10;
        
        do {
            color = colors[Math.floor(Math.random() * colors.length)];
            attempts++;
        } while (color === previousColor && attempts < maxAttempts);
        
        return color;
    };

    const handleStart = (selectedDifficulty: Difficulty) => {
        setDifficulty(selectedDifficulty);
        setGameScreen('playing');
        setScore(0);
        setCurrentRound(1);
        startNewRound();
    };

    const handleChoice = (choice: string) => {
        setSelectedChoice(choice);
        if (choice === currentColor) {
            setScore(score + 1);
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    const handleNext = () => {
        if (currentRound >= TOTAL_ROUNDS) {
            setGameScreen('end');
        } else {
            setCurrentRound(currentRound + 1);
            startNewRound();
        }
    };

    const handleBack = () => {
        setGameScreen('start');
        setScore(0);
        setCurrentRound(1);
    };

    const handleRestart = () => {
        setGameScreen('start');
        setScore(0);
        setCurrentRound(1);
    };

    useEffect(() => {
        if (gameScreen === 'playing') {
            startNewRound();
        }
    }, [difficulty]);

    return (
        <div className="app">
            {gameScreen === 'start' && (
                <StartScreen onStart={handleStart} />
            )}

            {gameScreen === 'playing' && (
                <>
                    <h1>Hue's that color?</h1>
                    <div className="level-indicator">
                        Level {currentRound} of {TOTAL_ROUNDS}
                    </div>
                    <ColorSwatch color={currentColor} />
                    <div className={`choices ${difficulty === 'medium' ? 'medium-layout' : ''}`}>
                        {choices.map((choice, index) => (
                            <ChoiceButton 
                                key={index} 
                                choice={choice} 
                                onSelect={handleChoice}
                                disabled={selectedChoice !== ''}
                                isSelected={choice === selectedChoice}
                                isCorrect={choice === selectedChoice ? isCorrect : null}
                                showCorrect={selectedChoice !== '' && choice === currentColor}
                            />
                        ))}
                    </div>
                    
                    <div className="navigation-buttons">
                        <button className="back-button" onClick={handleBack}>
                            ← Back
                        </button>
                        <button 
                            className="next-button" 
                            onClick={handleNext}
                            disabled={selectedChoice === ''}
                        >
                            {currentRound >= TOTAL_ROUNDS ? 'Finish' : 'Next →'}
                        </button>
                    </div>
                </>
            )}

            {gameScreen === 'end' && (
                <EndScreen 
                    score={score} 
                    totalRounds={TOTAL_ROUNDS} 
                    difficulty={difficulty}
                    onRestart={handleRestart}
                />
            )}
        </div>
    );
};

export default App;
