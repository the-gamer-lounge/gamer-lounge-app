import React from "react"
import Grid from "@mui/material/Grid"

const GameIndex = ({ logged_in, games }) => {
  return (
    <>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {games?.map((game, index) => {
          // Creating a function that will be able to send the ID of the game to create form, so that it can be used as the foreign key.
          const gameId = () => {
            const gameid = game.id
          }

          return (
            <Grid item key={index}>
              <div className="game-card">
                <img src={game.image} width="500px" />
                <p>{game.title}</p>
                <div className="flex-row">
                  <a href={`/gameshow/${game.id}`}>See Reviews</a>
                  {logged_in && (
                    <a href="/createprotected" onClick={gameId}>
                      Add Review
                    </a>
                  )}
                </div>
              </div>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default GameIndex
