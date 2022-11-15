import React from "react"
import Grid from "@mui/material/Grid"

const ReviewProtectedIndex = ({ logged_in, reviews, current_user, deleteReview }) => {
  
  return (
    <>
    <h1>Reviews</h1>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {reviews?.filter(review => review.user_id === current_user.id).map((review, index) => {
          // Creating a function that will be able to send the ID of the review to create form, so that it can be used as the foreign key.
          const reviewId = () => {
            const reviewId = review.id
          }
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
               <div> <p>{review.review}</p> </div>
               <div> <a href ={`/editprotected/${review.id}`}> Edit Review </a> <a href={"#"} onClick={handleClick}> Delete Review </a> </div>
              </div>
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default ReviewProtectedIndex
