const STORAGE_KEYS = {
    BEST_SCORE: 'game_bestScore'
};

export function saveState(bestScore) {
    localStorage.setItem(STORAGE_KEYS.BEST_SCORE, String(bestScore));
}

export function loadState() {

    const savedBestScore = localStorage.getItem(STORAGE_KEYS.BEST_SCORE);
    return {
        bestScore:  savedBestScore ? Number(savedBestScore) : 0
    }
}

export function clearStorage() {
    localStorage.removeItem(STORAGE_KEYS.BEST_SCORE);
}