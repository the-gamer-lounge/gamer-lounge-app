import * as React from "react"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"

export default function GenreRadioButton({ genres, handleSelect }) {
  return (
    <div className="game-filter-wrapper">
      <FormControl>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          sx={{ color: "#fff", fontSize: "1.4rem" }}
        >
          Filter by Genre:
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          {genres?.map((genre, i) => {
            return (
              <FormControlLabel
                key={i}
                value={genre}
                control={<Radio />}
                label={genre}
                onChange={handleSelect}
              />
            )
          })}
        </RadioGroup>
      </FormControl>
    </div>
  )
}
