import React from "react";
import { render } from "react-dom";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { API_RESPONSE } from "../components/apiresponse";
import ReviewCard from "../components/ReviewCard";

const GameShow = ({
  games,
  reviews,
  current_user,
  logged_in,
  deleteReview,
}) => {
  const { id } = useParams();
  const apiShowGame = games?.find((game) => {
    return game.id === +id;
  })
  return (
    <>
      {apiShowGame && (
        <div className="show-game-wrapper nav-top-mar footer-bottom-wrapper">
          <div
            className="game-show-card mar-btm-md"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))," +
                "url(" +
                "" +
                `${apiShowGame.background_image}` +
                ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="game-title-desc">
              <div className="flex-column title-desc-box">
                <div className="flex-column">
                  <h4>Title:</h4>
                  <p>{apiShowGame.name}</p>
                </div>
                <div className="flex-column desc-width">
                  <h4>Description:</h4>
                  {/* <p className="game-description">{showGame.description}</p> */}
                </div>
              </div>
              <div>
                {logged_in && (
                  <a href={`/createprotected/${id}`} className="btn">
                    Add Review
                  </a>
                )}
              </div>
            </div>
            {/* <div className="game-info-2">
              <h4>Price</h4>
              <p>{showGame.price}</p>
              <h4>Release Date:</h4>
              <p>{apiGames.released}</p>
              <h4>Developers</h4>
              <p>{showGame.developer}</p>
              <h4>Platforms</h4>
              <p>{showGame.platforms}</p>
              <h4>Single/Multiplayer</h4>
              <p>{showGame.player}</p>
              <h4>Genre</h4>
              <p>{showGame.genre}</p>
            </div> */}
            <div className="flex-row"></div>
            <div className="game-info-all flex-column">
              <div className="flex-row">
                <div className="flex-column">
                  <h4>Release Date:</h4>
                  <p>{apiShowGame.released_at}</p>
                </div>
                <div className="flex-column">
                  <h4>Price:</h4>
                  {/* <p>${showGame.price}</p> */}
                </div>
                <div className="flex-column">
                  <h4>Genre(s):</h4>
                  {/* <p>{showGame.genre}</p> */}
                </div>
              </div>
              <div className="game-devs desc-width flex-column">
                <h4>Developers:</h4>
                {/* <p>{showGame.developer}</p> */}
              </div>
              <div className="flex-row desc-width">
                <div className="flex-column">
                  <h4>Platforms:</h4>
                  {/* <p>{showGame.platforms}</p> */}
                </div>
                <div className="flex-column">
                  <h4>Single/Multiplayer</h4>
                  {/* <p>{showGame.player}</p> */}
                </div>
              </div>
            </div>
          </div>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {reviews
              ?.filter((review) => review.game_id === apiShowGame.id)
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
          <div className="mar-btm-lg">
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
              {reviews
                ?.filter((review) => review.game_id === apiShowGame.id)
                .map((review, index) => {
                  const handleClick = () => {
                    const response = confirm(
                      "Are you sure you want to delete this review as this cannot be undone."
                    );
                    if (response) {
                      deleteReview(review.id);
                    }
                  };
                  return (
                    <Grid item key={index}>
                      <ReviewCard
                        review={review}
                        current_user={current_user}
                        index={index}
                        handleClick={handleClick}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        </div>
      )}
    </>
  );
};

export default GameShow;
