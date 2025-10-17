// Simple 4x4 game logic
export const BOARD_SIZE = 4;

// Create empty 4x4 board
export const createEmptyBoard = () => {
  return Array(4).fill(null).map(() => Array(4).fill(0));
};

// Find empty spots
export const getEmptySpots = (board) => {
  const empty = [];
  board.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === 0) {
        empty.push({ row: rowIndex, col: colIndex });
      }
    });
  });
  return empty;
};

// Add random tile
export const addRandomTile = (board) => {
  const newBoard = board.map(row => [...row]);
  const emptySpots = getEmptySpots(newBoard);
  
  if (emptySpots.length > 0) {
    const randomSpot = emptySpots[Math.floor(Math.random() * emptySpots.length)];
    const value = Math.random() < 0.9 ? 2 : 4;
    newBoard[randomSpot.row][randomSpot.col] = value;
  }
  
  return newBoard;
};

// Start new game
export const initializeBoard = () => {
  let board = createEmptyBoard();
  board = addRandomTile(board);
  board = addRandomTile(board);
  return board;
};

// Move left
export const moveLeft = (board) => {
  return board.map(row => {
    // Remove zeros
    const noZeros = row.filter(cell => cell !== 0);
    
    // Merge same numbers
    const merged = [];
    for (let i = 0; i < noZeros.length; i++) {
      if (i < noZeros.length - 1 && noZeros[i] === noZeros[i + 1]) {
        merged.push(noZeros[i] * 2);
        i++; // skip next one
      } else {
        merged.push(noZeros[i]);
      }
    }
    
    // Add zeros to make it 4 long
    while (merged.length < 4) {
      merged.push(0);
    }
    
    return merged;
  });
};

// Move right
export const moveRight = (board) => {
  return board.map(row => {
    // Remove zeros
    const noZeros = row.filter(cell => cell !== 0);
    
    // Merge same numbers from right
    const merged = [];
    for (let i = noZeros.length - 1; i >= 0; i--) {
      if (i > 0 && noZeros[i] === noZeros[i - 1]) {
        merged.unshift(noZeros[i] * 2);
        i--; // skip previous one
      } else {
        merged.unshift(noZeros[i]);
      }
    }
    
    // Add zeros at start to make it 4 long
    while (merged.length < 4) {
      merged.unshift(0);
    }
    
    return merged;
  });
};

// Move up
export const moveUp = (board) => {
  const newBoard = createEmptyBoard();
  
  // Process each column
  for (let col = 0; col < 4; col++) {
    // Get column values
    const column = board.map(row => row[col]).filter(cell => cell !== 0);
    
    // Merge same numbers
    const merged = [];
    for (let i = 0; i < column.length; i++) {
      if (i < column.length - 1 && column[i] === column[i + 1]) {
        merged.push(column[i] * 2);
        i++; // skip next one
      } else {
        merged.push(column[i]);
      }
    }
    
    // Put merged values back in column
    merged.forEach((value, index) => {
      newBoard[index][col] = value;
    });
  }
  
  return newBoard;
};

// Move down
export const moveDown = (board) => {
  const newBoard = createEmptyBoard();
  
  // Process each column
  for (let col = 0; col < 4; col++) {
    // Get column values
    const column = board.map(row => row[col]).filter(cell => cell !== 0);
    
    // Merge same numbers from bottom
    const merged = [];
    for (let i = column.length - 1; i >= 0; i--) {
      if (i > 0 && column[i] === column[i - 1]) {
        merged.unshift(column[i] * 2);
        i--; // skip previous one
      } else {
        merged.unshift(column[i]);
      }
    }
    
    // Put merged values back in column from bottom
    merged.forEach((value, index) => {
      newBoard[3 - index][col] = value;
    });
  }
  
  return newBoard;
};

// Check if boards changed
export const boardsAreDifferent = (board1, board2) => {
  return board1.some((row, rowIndex) => 
    row.some((cell, colIndex) => cell !== board2[rowIndex][colIndex])
  );
};

// Check if won (has 2048)
export const isGameWon = (board) => {
  return board.some(row => row.some(cell => cell === 2048));
};

// Check if lost (no empty spots and no merges possible)
export const isGameLost = (board) => {
  // Check for empty spots
  if (board.some(row => row.some(cell => cell === 0))) {
    return false;
  }
  
  // Check for possible merges
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const current = board[row][col];
      
      // Check right
      if (col < 3 && board[row][col + 1] === current) {
        return false;
      }
      
      // Check down
      if (row < 3 && board[row + 1][col] === current) {
        return false;
      }
    }
  }
  
  return true;
};

// Calculate score
export const calculateScore = (oldBoard, newBoard) => {
  let score = 0;
  oldBoard.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (newBoard[rowIndex][colIndex] > cell) {
        score += newBoard[rowIndex][colIndex];
      }
    });
  });
  return score;
};
