# 2048 Game

A simple and clean implementation of the popular 2048 game built with React and Vite.

## How to Play

- Use **arrow keys** to move tiles in any direction
- Tiles with the same number will merge when they collide
- After each move, a new tile (2 or 4) appears randomly
- Try to reach **2048** to win!
- Game ends if no more moves are possible

## Getting Started

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd 2048Game
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Game

Start the development server:
```bash
npm run dev
```

Open your browser and go to `http://localhost:5173` (or the port shown in terminal) to play the game.

## Project Structure

```
2048Game/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── GameBoard.jsx          
│   │   ├── GameBoard.css          
│   │   ├── Tile.jsx               
│   │   ├── Tile.css               
│   │   ├── ScoreDisplay.jsx        
│   │   ├── ScoreDisplay.css       
│   │   ├── GameControls.jsx       
│   │   ├── GameControls.css       
│   │   ├── GameOverlay.jsx        
│   │   └── GameOverlay.css        
│   ├── App.jsx                   
│   ├── App.css                 
│   ├── gameLogic.js              
│   ├── main.jsx                   
│   └── index.css                 
├── index.html                    
├── package.json                  
├── vite.config.js                 
└── README.md                     
```

## Game Features

- **4x4 Board** - Fixed board size for classic 2048 experience
- **Arrow Key Controls** - Simple and intuitive controls
- **Tile Merging** - Same numbers combine to create higher values
- **Score Tracking** - Points earned from merged tiles
- **Win Detection** - Game ends when 2048 is reached
- **Lose Detection** - Game ends when no moves are possible
- **New Game** - Restart functionality
- **Responsive Design** - Works on different screen sizes

### Key Technologies

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **JavaScript ES6+** - Modern JavaScript features

