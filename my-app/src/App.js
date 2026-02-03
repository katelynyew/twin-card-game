import './App.css';
import { ScoreBoard } from './components/Scoreboard'
import { GameBoard } from './components/GameBoard'
import { useCardGame } from './hooks/useCardGame';

function App() {
  const { cards, score, bestScore, handleCardClick } = useCardGame();

  return (
    <div className="container">
      <h1>TWIN CARD GAME</h1>
      <GameBoard cards={cards} onCardClick={handleCardClick}/>
      <ScoreBoard score={score} bestScore={bestScore}/>
    </div>
  );
}

export default App;
