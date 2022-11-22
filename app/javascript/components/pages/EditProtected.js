import * as React from "react"
import { useState, useEffect } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import TextField from "@mui/material/TextField"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import FormHelperText from "@mui/material/FormHelperText"
import InputLabel from "@mui/material/InputLabel"

const EditProtected = ({ games, reviews, current_user, updateReview }) => {
  const { id } = useParams()
  let currentReview = reviews?.find((review) => review?.id === +id)

  const currentGame = games?.find((game) => game.id === currentReview?.game_id)

  const navigate = useNavigate()

  const [editReview, setEditReview] = useState({
    accessibility: "",
    difficulty: "",
    review_text: "",
    rating: "",
  })

  const [count, setCount] = useState(0)

  const twoCalls = (e) => {
    charCount(e)
    handleChange(e)
  }

  const charCount = (e) => {
    setCount(e.target.value.length)
  }

  const handleChange = (e) => {
    setEditReview({ ...editReview, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    updateReview(editReview, currentReview?.id)
    alert("Your review has been successfully updated.")
    navigate("/reviewprotectedindex")
  }

  return (
    <>
      {editReview && (
        <div className="form-wrapper footer-bottom-wrapper">
          <div className="review-form">
            <a href="/reviewprotectedindex" className="back-btn btn">
              Back to Reviews
            </a>
            <div className="flex-column mar-btm-md">
              <h4 className="review-for">Review For:</h4>
              <h3 className="review-title">{currentGame?.title}</h3>
            </div>
            <div className="flex-row mar-btm-sm">
              {/* Input for Accessibility */}
              <FormControl sx={{ m: 1, minWidth: 120, fontSize: "1.6rem" }}>
                <InputLabel id="accessibility-label">Accessibility*</InputLabel>
                <Select
                  id="accessibility"
                  labelId="accessibility-label"
                  value={editReview.accessibility}
                  name="accessibility"
                  onChange={handleChange}
                  className="form-input"
                  required
                  sx={{
                    backgroundColor: "#2d3237",
                    color: "#fff",
                    fontSize: "1.4rem",
                  }}
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
                  InputProps={{ inputProps: { min: 0, max: 5 } }}
                  sx={{
                    backgroundColor: "#2d3237",
                    color: "#fff",
                    fontSize: "1.4rem",
                  }}
                />
                <FormHelperText>
                  Please enter a number or decimal between 1-5.
                </FormHelperText>
              </FormControl>
            </div>
            <div className="flex-row mar-btm-sm">
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
                  InputProps={{ inputProps: { min: 0, max: 10 } }}
                  sx={{
                    backgroundColor: "#2d3237",
                    color: "#fff",
                    fontSize: "1.4rem",
                  }}
                />
                <FormHelperText>
                  Please enter a number or decimal between 1-10.
                </FormHelperText>
              </FormControl>
            </div>
            <div className="flex-row mar-btm-sm">
              {/* Input for Review */}
              <FormControl>
                <TextField
                  label="Review"
                  value={editReview.review_text}
                  variant="outlined"
                  name="review_text"
                  onChange={twoCalls}
                  className="form-input"
                  multiline
                  fullWidth
                  required
                  sx={{
                    backgroundColor: "#2d3237",
                    color: "#fff",
                    fontSize: "1.4rem",
                  }}
                  inputProps={{ maxLength: 1500 }}
                />
                <FormHelperText>
                  If you answered "Yes" to accessibility options, please include
                  them in your review.
                </FormHelperText>
                <p className="flex-center">{count}/1500</p>
              </FormControl>
            </div>
            <div className="flex-row">
              <a onClick={handleSubmit} className="btn">
                Submit
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EditProtected
