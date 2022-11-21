import * as React from "react"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Autocomplete from "@mui/material/Autocomplete"
import { useNavigate } from "react-router-dom"

export default function SearchBar({ games }) {
  const navigate = useNavigate()
  const handleSearch = (e, value) => {
    navigate(`/gameshow/${value.id}`)
  }

  const formattedGames = games?.map((game) => ({
    label: game.title,
    ...game,
  }))

  return (
    <Stack spacing={2} sx={{ width: 300, backgroundColor: "#fff" }}>
      <Autocomplete
        freeSolo
        autoComplete={true}
        id="free-solo-2-demo"
        disableClearable
        onChange={handleSearch}
        options={formattedGames}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  )
}
