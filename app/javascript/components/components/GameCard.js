import React from "react"

const GameCard = ({ game, logged_in }) => {
  return (
    <div className="game-card">
      <div className="game-img mar-btm-xs">
        <img src={game.background_image} />
      </div>
      <p className="mar-btm-xs">{game.name}</p>
      <div className="flex-row">
        <a href={`/gameshow/${game.id}`} className="btn">
          See Reviews
        </a>
        {logged_in && (
          <a href={`/createprotected/${game.id}`} className="btn">
            Add Review
          </a>
        )}
      </div>
    </div>
  )
}

export default GameCard
