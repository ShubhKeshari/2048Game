# 2048 Game

A simple and clean implementation of the popular 2048 game built with React and Vite.

## 🎮 How to Play

- Use **arrow keys** to move tiles in any direction
- Tiles with the same number will merge when they collide
- After each move, a new tile (2 or 4) appears randomly
- Try to reach **2048** to win!
- Game ends if no more moves are possible

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

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

### Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
2048Game/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── GameBoard.jsx          # Main game board component
│   │   ├── GameBoard.css          # Game board styles
│   │   ├── Tile.jsx               # Individual tile component
│   │   ├── Tile.css               # Tile styles and colors
│   │   ├── ScoreDisplay.jsx        # Score display component
│   │   ├── ScoreDisplay.css       # Score display styles
│   │   ├── GameControls.jsx       # Game controls (New Game button)
│   │   ├── GameControls.css       # Controls styles
│   │   ├── GameOverlay.jsx        # Win/Lose overlay component
│   │   └── GameOverlay.css        # Overlay styles
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # App styles
│   ├── gameLogic.js               # Core game logic and utilities
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles
├── index.html                     # HTML template
├── package.json                   # Project dependencies
├── vite.config.js                 # Vite configuration
└── README.md                      # This file
```

## 🧩 Components Overview

### Core Files

- **`App.jsx`** - Main application component that manages game state
- **`gameLogic.js`** - Contains all game logic functions (moves, merging, win/lose detection)
- **`main.jsx`** - React application entry point

### UI Components

- **`GameBoard.jsx`** - Renders the 4x4 game grid
- **`Tile.jsx`** - Individual tile component with value display
- **`ScoreDisplay.jsx`** - Shows current score
- **`GameControls.jsx`** - Contains the "New Game" button
- **`GameOverlay.jsx`** - Win/lose modal overlay

## 🎯 Game Features

- ✅ **4x4 Board** - Fixed board size for classic 2048 experience
- ✅ **Arrow Key Controls** - Simple and intuitive controls
- ✅ **Tile Merging** - Same numbers combine to create higher values
- ✅ **Score Tracking** - Points earned from merged tiles
- ✅ **Win Detection** - Game ends when 2048 is reached
- ✅ **Lose Detection** - Game ends when no moves are possible
- ✅ **New Game** - Restart functionality
- ✅ **Responsive Design** - Works on different screen sizes

## 🛠️ Technical Details

### Game Logic

The game uses functional programming principles with pure functions:

- **`initializeBoard()`** - Creates starting board with 2 random tiles
- **`moveLeft/Right/Up/Down()`** - Handle tile movement and merging
- **`addRandomTile()`** - Adds new tile after each move
- **`isGameWon()`** - Checks if 2048 tile exists
- **`isGameLost()`** - Checks if no moves are possible
- **`calculateScore()`** - Calculates points from merged tiles

### Key Technologies

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features
- **JavaScript ES6+** - Modern JavaScript features

## 🎨 Customization

You can easily customize the game by modifying:

- **Tile colors** in `src/components/Tile.css`
- **Game appearance** in the CSS files
- **Game logic** in `src/gameLogic.js`
- **Board size** (requires changes to multiple files)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the MIT License.

---

**Enjoy playing 2048!** 🎉
