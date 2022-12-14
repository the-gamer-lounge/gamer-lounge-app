import React from "react"
import { render } from "react-dom"
import { useParams } from "react-router-dom"
import { Grid } from "@mui/material"
import ReviewCard from "../components/ReviewCard"

const GameShow = ({
  games,
  reviews,
  current_user,
  logged_in,
  deleteReview,
}) => {
  const { id } = useParams()
  const showGame = games?.find((game) => game.id === +id)
  let userReviewLength = reviews?.filter(
    (review) => review?.game_id === showGame?.id
  ).length
  console.log(userReviewLength)
  return (
    <>
      {showGame && (
        <div className="show-game-wrapper footer-bottom-wrapper nav-top-mar">
          <div
            className="game-show-card mar-btm-md"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9))," +
                "url(" +
                "" +
                `${showGame.image}` +
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
                  <p>{showGame.title}</p>
                </div>
                <div className="flex-column desc-width">
                  <h4>Description:</h4>
                  <p className="game-description">{showGame.description}</p>
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
            <div className="game-info-all flex-column">
              <div className="flex-row">
                <div className="flex-column">
                  <h4>Release Date:</h4>
                  <p>{showGame.release}</p>
                </div>
                <div className="flex-column">
                  <h4>Price:</h4>
                  <p>${showGame.price}</p>
                </div>
                <div className="flex-column">
                  <h4>Genre(s):</h4>
                  <p>{showGame.genre}</p>
                </div>
              </div>
              <div className="game-devs desc-width flex-column">
                <h4>Developers:</h4>
                <p>{showGame.developer}</p>
              </div>
              <div className="flex-row desc-width">
                <div className="flex-column">
                  <h4>Platforms:</h4>
                  <p>{showGame.platforms}</p>
                </div>
                <div className="flex-column">
                  <h4>Single/Multiplayer</h4>
                  <p>{showGame.player}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="show-reviews mar-btm-lg">
            {userReviewLength === 0 && (
              <div className="no-review-text flex-column">
                <h3>This game currently has no reviews.</h3>
                <h3>
                  Would you like to&nbsp;
                  <a href={`/createprotected/${showGame.id}`}>create one?</a>
                </h3>
              </div>
            )}
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
                ?.filter((review) => review.game_id === showGame.id)
                .map((review, index) => {
                  const handleClick = () => {
                    const response = confirm(
                      "Are you sure you want to delete this review as this cannot be undone."
                    )
                    if (response) {
                      deleteReview(review.id)
                    }
                  }
                  return (
                    <Grid item key={index}>
                      <ReviewCard
                        review={review}
                        current_user={current_user}
                        index={index}
                        handleClick={handleClick}
                        logged_in={logged_in}
                      />
                    </Grid>
                  )
                })}
            </Grid>
          </div>
        </div>
      )}
    </>
  )
}

export default GameShow
