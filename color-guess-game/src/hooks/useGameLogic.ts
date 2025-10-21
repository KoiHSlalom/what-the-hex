import { useState, useEffect } from 'react';
import { generateChoices } from '../utils/generateChoices';
import { Difficulty } from '../types';

const useGameLogic = (difficulty: Difficulty) => {
    const [currentColor, setCurrentColor] = useState<string>('');
    const [choices, setChoices] = useState<string[]>([]);
    const [score, setScore] = useState<number>(0);
    const [attempts, setAttempts] = useState<number>(0);
    const [gameOver, setGameOver] = useState<boolean>(false);

    useEffect(() => {
        startNewRound();
    }, [difficulty]);

    const startNewRound = () => {
        const color = getRandomColor();
        setCurrentColor(color);
        const newChoices = generateChoices(color, difficulty);
        setChoices(newChoices);
        setAttempts(0);
        setGameOver(false);
    };

    const getRandomColor = (): string => {
        // Logic to get a random color from the color array
        // This function should be implemented to return a valid color
    };

    const checkSelection = (selectedColor: string) => {
        setAttempts(prev => prev + 1);
        if (selectedColor === currentColor) {
            setScore(prev => prev + 1);
            startNewRound();
        } else if (attempts >= getMaxAttempts()) {
            setGameOver(true);
        }
    };

    const getMaxAttempts = (): number => {
        switch (difficulty) {
            case 'easy':
                return 1;
            case 'medium':
                return 2;
            case 'hard':
                return 3;
            default:
                return 1;
        }
    };

    return {
        currentColor,
        choices,
        score,
        attempts,
        gameOver,
        checkSelection,
    };
};

export default useGameLogic;