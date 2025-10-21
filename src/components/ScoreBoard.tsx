import React from 'react';

interface ScoreBoardProps {
  score: number;
  attempts: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, attempts }) => {
  return (
    <div className="score-board">
      <h2>Score: {score}</h2>
      <h3>Attempts: {attempts}</h3>
    </div>
  );
};

export default ScoreBoard;