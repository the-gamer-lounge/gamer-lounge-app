import * as React from "react"
import { useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import TextField from "@mui/material/TextField"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import FormHelperText from "@mui/material/FormHelperText"
import InputLabel from "@mui/material/InputLabel"

const EditProtected = ({ games, reviews, current_user }) => {
  const { id } = useParams()
  let currentReview = reviews?.find((review) => review.id === +id)

  const currentGame = games?.find((game) => game.id === currentReview.game_id)
  console.log("currentGame", currentGame, "game_id", currentReview.game_id)

  const navigate = useNavigate()

  const [editReview, setEditReview] = useState({
    username: currentReview?.username,
    accessibility: currentReview?.accessibility,
    difficulty: currentReview?.difficulty,
    review: currentReview?.review,
    rating: currentReview?.rating,
  })

  const handleChange = (e) => {
    setEditReview({ ...editReview, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    updateReview(editReview, currentReview.id)
    alert("Your review has been successfully updated.")
    navigate("/reviewprotectedindex")
  }

  return (
    <>
      <div className="form-wrapper">
        <div className="flex-row">
          <a href="/reviewprotectedindex" className="back-btn">
            Back to Reviews
          </a>
          <p>Review For: {currentGame.title}</p>
        </div>
        <form>
          <div className="flex-row">
            {/* Input for Accessibility */}
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="accessibility-label">Accessibility*</InputLabel>
              <Select
                id="accessibility"
                labelId="accessibility-label"
                value={editReview.accessibility}
                name="accessibility"
                onChange={handleChange}
                className="form-input"
                required
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
              <FormHelperText>
                Does the game have additional accessibility options?
              </FormHelperText>
            </FormControl>
            {/* Input for Overall Rating */}
            <FormControl>
              <TextField
                id="outlined-basic"
                label="Overall Rating"
                value={editReview.rating}
                variant="outlined"
                name="rating"
                onChange={handleChange}
                className="form-input"
                required
                type="number"
              />
              <FormHelperText>
                Please enter a number or decimal between 1-5.
              </FormHelperText>
            </FormControl>
          </div>
          <div className="flex-row">
            {/* Input for Difficulty */}
            <FormControl>
              <TextField
                label="Difficulty"
                value={editReview.difficulty}
                variant="outlined"
                name="difficulty"
                onChange={handleChange}
                className="form-input"
                required
                type="number"
              />
              <FormHelperText>
                Please enter a number or decimal between 1-10.
              </FormHelperText>
            </FormControl>
          </div>
          <div className="flex-row">
            {/* Input for Review */}
            <FormControl>
              <TextField
                label="Review"
                value={editReview.review}
                variant="outlined"
                name="review"
                onChange={handleChange}
                className="form-input"
                multiline
                fullWidth
                required
              />
              <FormHelperText>
                If you answered "Yes" to accessibility options, please include
                them in your review.
              </FormHelperText>
            </FormControl>
          </div>
          <div className="flex-row">
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditProtected
