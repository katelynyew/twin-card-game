Twin Card Game 
A memory-matching card game built with React that challenges players to find matching pairs of cards. Features dynamic card images from the Giphy API, score tracking, and persistent high score management.
 Features

Interactive Gameplay: Click cards to reveal images and find matching pairs
Dynamic Content: Card images fetched dynamically from Giphy API
Score Tracking: Real-time score updates as you match pairs
High Score Persistence: Best scores saved using localStorage
Responsive Design: Clean 4x3 grid layout that works across devices
Win Detection: Game recognizes when all 6 pairs have been matched

 Technologies Used

React - UI library for building component-based interface
JavaScript (ES6+) - Modern JavaScript features including async/await, hooks, and ES6 modules
Giphy API - RESTful API for fetching card images
CSS3 - Styling and animations
localStorage - Client-side data persistence
Git - Version control

 Architecture
The project follows React best practices with a clean separation of concerns:
src/
├── components/
│   ├── Card.js           # Individual card component
│   ├── GameBoard.js      # 4x3 grid container
│   └── Scoreboard.js     # Score display component
├── hooks/
│   ├── useCardGame.js    # Custom hook for game logic & state
│   ├── createCardArray.js # Card initialization utility
│   └── storage.js        # localStorage management
├── utils/
│   └── shuffle.js        # Fisher-Yates shuffle algorithm
├── assets/
│   └── images/           # Card back image and UI assets
└── App.js                # Root component
 Getting Started
Prerequisites

Node.js (v14 or higher)
npm or yarn

Installation

Clone the repository

bashgit clone https://github.com/katelynyew/twin-card-game.git
cd twin-card-game

Install dependencies

bashnpm install

Add your Giphy API key

Get a free API key from Giphy Developers
Replace the API_KEY in src/hooks/useCardGame.js


Start the development server

bashnpm start

Open http://localhost:3000 to play the game

 How to Play

Click on any card to reveal its image
Click a second card to find its match
If the cards match, they stay revealed and you earn 1 point
If they don't match, both cards flip back over
Continue until all 6 pairs are matched
Try to beat your best score!

 Key Implementation Details
Custom Hook Pattern
Game logic is encapsulated in useCardGame hook, separating business logic from UI components:

State management for cards, score, and flipped cards
Match detection algorithm
localStorage integration for persistent high scores

Fisher-Yates Shuffle
Cards are randomized on mount using the Fisher-Yates algorithm for true randomness.
Async API Integration
Giphy API calls use async/await patterns with proper error handling to fetch card images on component mount.
Component Composition
UI is built using small, focused components that receive props and handle specific responsibilities.
 Screenshots
<!-- Add screenshots here once you have them -->
Show Image
Show Image
 Future Enhancements

 Difficulty levels (different grid sizes)
 Timer/speed challenge mode
 Move counter
 Theme selection (different API categories)
 Multiplayer mode
 Sound effects and animations
 Leaderboard with multiple high scores

 License
This project is open source and available under the MIT License.
 Author
Katelyn Yew

GitHub: @katelynyew
LinkedIn: katelynyew

 Acknowledgments

Card images provided by Giphy API
Built as part of portfolio development for web development learning
