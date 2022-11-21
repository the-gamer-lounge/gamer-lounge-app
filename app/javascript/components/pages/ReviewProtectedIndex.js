import React from "react"
import Grid from "@mui/material/Grid"
import ReviewCard from "../components/ReviewCard"

const ReviewProtectedIndex = ({
  logged_in,
  reviews,
  current_user,
  deleteReview,
  handleClick,
}) => {
  if (logged_in) {
    return (
      <div className="nav-top-mar footer-bottom-wrapper">
        <h2 className="flex-center">Reviews</h2>
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
            ?.filter((review) => review.user_id === current_user.id)
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
                  />
                </Grid>
              )
            })}
        </Grid>
      </div>
    )
  } else if (!logged_in) {
    return <h1>You are not logged in.</h1>
  }
}

export default ReviewProtectedIndex
