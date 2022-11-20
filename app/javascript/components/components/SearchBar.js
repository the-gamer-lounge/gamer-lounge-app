import * as React from "react"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import Autocomplete from "@mui/material/Autocomplete"

export default function SearchBar({
  games,
  foundGames,
  handleSearch,
  searchTerm,
}) {
  return (
    <Stack spacing={2} sx={{ width: 300, backgroundColor: "#fff" }}>
      <Autocomplete
        freeSolo
        autoComplete={true}
        id="free-solo-2-demo"
        disableClearable
        onClick={handleSearch}
        options={games?.map((game) => game.title)}
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
