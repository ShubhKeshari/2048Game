import React, { useState, useEffect, useCallback } from 'react';
import GameBoard from './components/GameBoard';
import GameControls from './components/GameControls';
import ScoreDisplay from './components/ScoreDisplay';
import GameOverlay from './components/GameOverlay';
import {
  initializeBoard,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  addRandomTile,
  boardsAreDifferent,
  isGameWon,
  isGameLost,
  calculateScore
} from './gameLogic';
import './App.css';

function App() {
  const [board, setBoard] = useState(() => initializeBoard());
  const [score, setScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);

  // Handle moves
  const handleMove = useCallback((direction) => {
    if (gameLost || gameWon) return;

    let newBoard;
    switch (direction) {
      case 'left':
        newBoard = moveLeft(board);
        break;
      case 'right':
        newBoard = moveRight(board);
        break;
      case 'up':
        newBoard = moveUp(board);
        break;
      case 'down':
        newBoard = moveDown(board);
        break;
      default:
        return;
    }

    // Only update if board changed
    if (boardsAreDifferent(board, newBoard)) {
      const moveScore = calculateScore(board, newBoard);
      setScore(prev => prev + moveScore);
      
      const boardWithNewTile = addRandomTile(newBoard);
      setBoard(boardWithNewTile);
      
      // Check win
      if (!gameWon && isGameWon(boardWithNewTile)) {
        setGameWon(true);
      }
    }
  }, [board, gameLost, gameWon]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          handleMove('left');
          break;
        case 'ArrowRight':
          event.preventDefault();
          handleMove('right');
          break;
        case 'ArrowUp':
          event.preventDefault();
          handleMove('up');
          break;
        case 'ArrowDown':
          event.preventDefault();
          handleMove('down');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleMove]);

  // Check game over
  useEffect(() => {
    if (!gameWon && isGameLost(board)) {
      setGameLost(true);
    }
  }, [board, gameWon]);

  // Restart game
  const restartGame = () => {
    setBoard(initializeBoard());
    setScore(0);
    setGameWon(false);
    setGameLost(false);
  };

  return (
    <div className="app">
      <div className="game-container">
        <h1 className="game-title">2048</h1>
        
        <ScoreDisplay score={score} />
        
        <GameControls onRestart={restartGame} />
        
        <GameBoard board={board} />
        
        {(gameWon || gameLost) && (
          <GameOverlay 
            isWon={gameWon}
            isLost={gameLost}
            onRestart={restartGame}
          />
        )}
        
        <div className="instructions">
          <p>Combine tiles with the same number to reach 2048.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
