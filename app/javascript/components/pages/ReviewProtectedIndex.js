import React from "react"
import Grid from "@mui/material/Grid"

const ReviewProtectedIndex = ({ logged_in, reviews, current_user, deleteReview }) => {
  if (logged_in) {
  return (
    <>
    <h1>Reviews</h1>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {reviews?.filter(review => review.user_id === current_user.id).map((review, index) => {
          const handleClick = () => {
            const response = confirm("Are you sure you want to delete this review as this cannot be undone.") 
            if (response) {
              deleteReview(review.id)
            } else if (!response) {
            }
          }
          return (
            <Grid item key={index}>
              <div className="review-card">
               <div className="flex-row"> 
                <div> <p>{current_user.username}</p> <p>{review.difficulty}</p> <p>{review.accessibility}</p> </div>
                <div> <p>{review.rating}</p> </div>
               </div>
               <div> <p>{review.review_text}</p> </div>
               <div> <a href ={`/editprotected/${review.id}`}> Edit Review </a> <a href={"#"} onClick={handleClick}> Delete Review </a> </div>
              </div>
            </Grid>
          )
        })}
      </Grid>
    </>
  )}
 else if (!logged_in) {
    return (
      <h1>You are not logged in.</h1>
    )
}}

export default ReviewProtectedIndex
