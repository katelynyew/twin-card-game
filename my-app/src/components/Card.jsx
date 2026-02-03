import cardbackImage from '../assets/images/cardback.jpg'
export function Card({ card, onCardClick }) {

    return (
        <div 
            className="card"
            onClick={() => onCardClick(card.id)}
        >
            {card.isFlipped || card.isMatched ? (
                <img src={card.image} alt="card-image" />
            ) : (
                <div className="card-back">
                    <img src={cardbackImage} alt="card-back-image" />
                </div>
            )}
        </div>
    );
}