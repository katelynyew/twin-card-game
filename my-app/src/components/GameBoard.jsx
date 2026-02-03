import { Card } from './Card'
export function GameBoard({ cards, onCardClick }) {
    return (
        <div className="game-board">
            {cards.map(card => (
                <Card
                    key={card.id}
                    card={card}
                    onCardClick={onCardClick}
                />
            ))}
        </div>
    )
}