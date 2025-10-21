# What The Hex

## Overview
What The Hex is an interactive web application where players guess the hex color code (or corresponding name) of a displayed color swatch. The game features three difficulty levels: Easy, Medium, and Hard, each offering a different number of multiple-choice answers (2, 4, or 6). Inspired by similar color identification games (e.g. yizzle.com/whatthehex/) but focused on quick multiple-choice play.

## Features
- **Color Swatch Display**: Players are presented with a color swatch that they need to identify.
- **Multiple Choice Answers**: Depending on the selected difficulty, players will have 2, 4, or 6 choices to select from.
- **Difficulty Levels**:
  - **Easy**: 2 choices
  - **Medium**: 4 choices
  - **Hard**: 6 choices
- **Score Tracking**: The game keeps track of the player's score and attempts.

## Project Structure
```
what-the-hex
├── public
│   └── index.html
├── src
│   ├── index.tsx
│   ├── App.tsx
│   ├── components
│   │   ├── ColorSwatch.tsx
│   │   ├── ChoiceButton.tsx
│   │   ├── ModeSelector.tsx
│   │   └── ScoreBoard.tsx
│   ├── hooks
│   │   └── useGameLogic.ts
│   ├── utils
│   │   ├── colors.ts
│   │   ├── generateChoices.ts
│   │   └── difficulty.ts
│   ├── styles
│   │   └── global.css
│   ├── types
│   │   └── index.ts
│   ├── tests
│   │   └── generateChoices.test.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd what-the-hex
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   # or
   npm run dev
   ```
5. Open your browser and go to `http://localhost:5173` (default Vite port) to play the game.

## Gameplay Instructions
- Select a difficulty level using the Mode Selector.
- Observe the displayed color swatch.
- Choose the correct hex/color label from the provided options.
- Your score and attempt count update after each guess.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.