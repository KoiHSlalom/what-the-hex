import React from 'react';
import { Difficulty } from '../types';

interface EndScreenProps {
    score: number;
    totalRounds: number;
    difficulty: Difficulty;
    onRestart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ score, totalRounds, difficulty, onRestart }) => {
    const percentage = Math.round((score / totalRounds) * 100);
    const [showCopyNotification, setShowCopyNotification] = React.useState(false);
    
    const getPerformanceMessage = () => {
        if (percentage === 100) return "Perfect! 🏆";
        if (percentage >= 80) return "Excellent! 🌟";
        if (percentage >= 60) return "Good Job! 👍";
        if (percentage >= 40) return "Not Bad! 💪";
        return "Keep Practicing! 📚";
    };

    const getDifficultyLabel = () => {
        return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    };

    const handleShare = async () => {
        const shareText = `🎨 I scored ${score}/${totalRounds} (${percentage}%) on What The Hex! Can you beat my score?\n\nDifficulty: ${getDifficultyLabel()}\n${getPerformanceMessage()}\n\nPlay now: ${window.location.href}`;
        
        // Try native share API first (mobile devices)
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'What The Hex - My Score',
                    text: shareText,
                });
            } catch (err) {
                // User cancelled share or error occurred
                console.log('Share cancelled or failed:', err);
            }
        } else {
            // Fallback to clipboard
            try {
                await navigator.clipboard.writeText(shareText);
                setShowCopyNotification(true);
                setTimeout(() => setShowCopyNotification(false), 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    };

    return (
        <div className="end-screen">
            <h1 className="game-title">Game Complete!</h1>
            
            <div className="final-score-card">
                <div className="performance-message">{getPerformanceMessage()}</div>
                <div className="score-display">
                    <span className="score-number">{score}</span>
                    <span className="score-divider">/</span>
                    <span className="score-total">{totalRounds}</span>
                </div>
                <div className="score-percentage">{percentage}% Correct</div>
                <div className="difficulty-badge">
                    Difficulty: <strong>{getDifficultyLabel()}</strong>
                </div>
            </div>

            <div className="end-actions">
                <button className="play-again-button" onClick={onRestart}>
                    🔄 Play Again
                </button>
                <button className="share-button" onClick={handleShare}>
                    📤 Share Results
                </button>
            </div>

            {showCopyNotification && (
                <div className="copy-notification">
                    ✅ Copied to clipboard!
                </div>
            )}

            <div className="game-stats">
                <div className="stat-item">
                    <span className="stat-value">✅ {score}</span>
                    <span className="stat-label">Correct</span>
                </div>
                <div className="stat-item">
                    <span className="stat-value">❌ {totalRounds - score}</span>
                    <span className="stat-label">Incorrect</span>
                </div>
            </div>
        </div>
    );
};

export default EndScreen;
