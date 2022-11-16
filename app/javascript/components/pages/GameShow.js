import React from "react";
import { render } from "react-dom";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

const GameShow = ({ games, reviews, current_user }) => {
  const { id } = useParams();
  const showGame = games?.find((game) => game.id === +id);
  return (
    <>
    {showGame && 
    <>
      <div className="game-card">
        <img src={showGame.image} width="500px" />
        <div className="game-info-1">
          <h4>Title</h4>
          <p>{showGame.title}</p>
          <h4>Description</h4>
          <p>{showGame.description}</p>
        </div>
        <div className="game-info-2">
          <h4>Price</h4>
          <p>{showGame.price}</p>
          <h4>Release Date:</h4>
          <p>{showGame.release}</p>
          <h4>Developers</h4>
          <p>{showGame.developer}</p>
          <h4>Platforms</h4>
          <p>{showGame.platforms}</p>
          <h4>Single/Multiplayer</h4>
          <p>{showGame.player}</p>
          <h4>Genre</h4>
          <p>{showGame.genre}</p>
        </div>
        <div className="flex-row"></div>
      </div>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {reviews
          ?.filter((review) => review.game_id === showGame.id)
          .map((review, index) => {
            return (
              <Grid item key={index}>
                <div className="review-card">
                  <div className="flex-row">
                    <div>
                      <h4>Username:</h4>
                      <p>{review.username}</p>
                      <h4>Difficulty:</h4>
                      <p>{review.difficulty}</p>
                      <h4>Accessibility</h4>
                      <p>{review.accessibility}</p>
                    </div>
                    <div>
                      <h4>Rating:</h4>
                      <p>{review.rating}</p>
                    </div>
                  </div>
                  <div>
                    <h4>Review:</h4>
                    <p>{review.review}</p>
                  </div>
                </div>
              </Grid>
            );
          })}
      </Grid>
      </>
        }
    </>
  );
};

export default GameShow;
