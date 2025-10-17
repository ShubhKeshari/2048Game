import React from 'react';
import './GameControls.css';

function GameControls({ onRestart }) {
  return (
    <div className="game-controls">
      <button className="restart-button" onClick={onRestart}>
        New Game
      </button>
    </div>
  );
}

export default GameControls;
