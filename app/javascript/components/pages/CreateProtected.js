import * as React from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import { string } from "prop-types";
import { create } from "@mui/material/styles/createTransitions";

const CreateProtected = ({ current_user, logged_in, games, createReview }) => {
  const { id } = useParams();
  let currentGame = games?.find((game) => game.id === +id);

  const navigate = useNavigate();

  const [newReview, setNewReview] = useState({
    username: current_user.username,
    game_id: parseInt(id),
    user_id: current_user.id,
    accessibility: "",
    difficulty: 0,
    review_text: "",
    rating: 0,
  });
  console.log(currentGame);

  const handleChange = (e) => {

    setNewReview({ ...newReview, [e.target.name]: e.target.value });
    console.log("newReview:", newReview, "Value:", e.target.value);
  };

    setNewReview({ ...newReview, [e.target.name]: e.target.value })
  }


  const handleSubmit = () => {
    setNewReview(parseInt(newReview.difficulty))
    setNewReview(parseFloat(newReview.rating))
    createReview(newReview);
    navigate("/gameindex");
  };

  return (
    <>
      {createReview && (
        <>
          <div className="form-wrapper">
            <div className="flex-row">
              <a href="/gameindex" className="back-btn">
                Back to Games
              </a>
              <p>Review For: {currentGame?.title}</p>
            </div>
            <div className="flex-row">
              {/* Input for Accessibility */}
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="accessibility-label">Accessibility*</InputLabel>
                <Select
                  id="accessibility"
                  labelId="accessibility-label"
                  value={newReview.accessibility}
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
                  variant="outlined"
                  name="review_text"
                  onChange={handleChange}
                  className="form-input"
                  multiline
                  fullWidth
                  required
                  type="text"
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
          </div>
        </>
      )}
    </>
  );
};

export default CreateProtected;
