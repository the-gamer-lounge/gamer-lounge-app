import React from "react"
import Grid from "@mui/material/Grid"
import GameCard from "../components/GameCard"
import { Box } from "@mui/system"

const GameIndex = ({ logged_in, games }) => {
  return (
    <div className="nav-top-mar footer-bottom-wrapper">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {games?.map((game, index) => {
          return (
            <Grid item key={index}>
              <GameCard game={game} logged_in={logged_in} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default GameIndex
