
export function ScoreBoard({score, bestScore}) {
    return (
        <div className="score-board">
            <h1>Current Score: {score}</h1>
            <h2>Best Score: {bestScore}</h2>
        </div>
    )
}