export function shuffle(cardArray) {
    for (let i = cardArray.length - 1; i > 0 ; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]];
    }
    return cardArray;
}