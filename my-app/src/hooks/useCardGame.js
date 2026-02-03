import {shuffle} from '../utils/shuffle.js'
import { createCardArray } from './createCardArray.js';
import { useEffect, useState } from 'react';
import {saveState, loadState} from './storage.js'
import cardFlipSound from '../assets/flip.mp3'

export function useCardGame() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        async function fetchCardImages() {
            const API_KEY = 'XHcKrywITsh1tVreO4kNx9z8A0PVTMgz';
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=anime&limit=6`);
            const result = await response.json();
            const imgUrls = result.data.map(gif => gif.images.original.url);

            const newCards = [];
            for (let i = 0; i < 6; i++) {
                const card = {
                    id: crypto.randomUUID(),
                    image: imgUrls[i],
                    isFlipped: false,
                    isMatched: false
                };
                newCards.push(card, {...card, id: crypto.randomUUID()});
            }
            setCards(shuffle(newCards));
        }
        fetchCardImages();
    }, []);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(() => loadState().bestScore);
    const [flippedCards, setFlippedCards] = useState([]);
    useEffect(() => {
        if (score > bestScore) {
            setBestScore(score);
            saveState(score);
        }
    }, [score]);
    

    function handleCardClick(cardId) {
        const audio = new Audio(cardFlipSound);
        audio.play();
        const clickedCard = cards.find(card => card.id === cardId);
        if (clickedCard.isFlipped || clickedCard.isMatched) return;
        const updatedCards = cards.map(card => 
            card.id === cardId 
            ? { ...card, isFlipped: true} 
            : card); 
        setCards(updatedCards);

        const newFlippedCards = [...flippedCards, clickedCard];
        setFlippedCards(newFlippedCards);
        if (newFlippedCards.length === 2) {
            checkMatch(newFlippedCards);
        }
    }

    function checkMatch(flippedCards) {
        if (flippedCards[0].image === flippedCards[1].image) {
            const updatedCards = cards.map(card => 
                card.image === flippedCards[0].image 
                ? {...card, isMatched: true} 
                : card);
            setCards(updatedCards);
            setScore(score + 1);
            setFlippedCards([]);
        }
        else {
            const updatedCards = cards.map(card => 
                card.id === flippedCards[0].id
                || card.id === flippedCards[1].id 
                ? {...card, isFlipped: false} 
                : card
            );
            setCards(updatedCards);
            setFlippedCards([]);
        }
    }
    
    return {
        cards,
        score,
        bestScore,
        handleCardClick
    }
}

