import { colors } from './colors';
import { Difficulty } from '../types';

// Generate unique choices including the currentColor, shuffled.
export function generateChoices(currentColor: string, difficulty: Difficulty): string[] {
    const numberOfChoices = difficulty === 'easy' ? 2 : difficulty === 'medium' ? 4 : 6;
    const pool = new Set<string>();
    pool.add(currentColor);

    while (pool.size < numberOfChoices) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        pool.add(randomColor);
    }

    // Shuffle by randomizing with sort (sufficient for small arrays here)
    return Array.from(pool).sort(() => Math.random() - 0.5);
}