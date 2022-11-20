import React from "react"
import Grid from "@mui/material/Grid"
import GameCard from "../components/GameCard"

const GameIndex = ({ logged_in, games }) => {
  return (
    <>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {games?.map((game, index) => {
          return (
            <Grid item key={index}>
              <GameCard game={game} logged_in={logged_in} />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default GameIndex
