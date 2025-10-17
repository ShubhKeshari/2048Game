import React from 'react';
import './GameOverlay.css';

function GameOverlay({ isWon, isLost, onRestart }) {
  if (!isWon && !isLost) return null;

  return (
    <div className="game-overlay">
      <div className="overlay-content">
        <h2 className="overlay-title">
          {isWon ? 'You Win!' : 'Game Over!'}
        </h2>
        <p className="overlay-message">
          {isWon 
            ? 'Congratulations! You reached 2048!' 
            : 'No more moves available. Try again!'
          }
        </p>
        <button className="overlay-button" onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default GameOverlay;
