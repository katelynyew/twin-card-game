
// create card array and card object with states

export function createCardArray() {
    const cardArray = [];
    for (let i = 0; i < 6; i++) {
        const card = {
            id: crypto.randomUUID(),
            image: null,
            isFlipped: false,
            isMatched: false
        };
        cardArray.push(card, {...card, id: crypto.randomUUID()});
    }
    return cardArray;
}