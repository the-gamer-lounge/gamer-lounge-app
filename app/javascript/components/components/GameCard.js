import React from "react"

const GameCard = ({ game, logged_in }) => {
  return (
    <div className="game-card">
      <img src={game.image} className="game-img" />
      <p>{game.title}</p>
      <div className="flex-row">
        <a href={`/gameshow/${game.id}`}>See Reviews</a>
        {logged_in && <a href={`/createprotected/${game.id}`}>Add Review</a>}
      </div>
    </div>
  )
}

export default GameCard
