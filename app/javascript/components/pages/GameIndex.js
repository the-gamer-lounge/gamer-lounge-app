import Grid from "@mui/material/Grid"
import GameCard from "../components/GameCard"
import GenreRadioButton from "../components/GenreRadioButton"
import React, { useState, useEffect } from "react"

const GameIndex = ({ logged_in, games }) => {
  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState("All")
  useEffect(() => {
    const genres = games?.map((game) => game.genre)
    const removeDupes = [...new Set(genres)]
    setGenres(["All", ...removeDupes])
  }, [games])

  const handleSelect = (e) => {
    setSelectedGenre(e.target.value)
  }

  return (
    <div className="game-index-wrapper mar-btm-md">
      <div className="filter-column mar-btm-md">
        <GenreRadioButton genres={genres} handleSelect={handleSelect} />
      </div>
      <h2 className="flex-center">All Games</h2>
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
        {games
          ?.filter((game) => {
            if (
              game.genre === selectedGenre ||
              !selectedGenre.length ||
              selectedGenre === "All"
            ) {
              return true
            }
          })
          .map((game, index) => {
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
