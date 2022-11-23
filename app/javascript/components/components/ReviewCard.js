import React, { useState } from "react"
import Rating from "@mui/material/Rating"
import { Avatar } from "@mui/material"

const ReviewCard = ({
  review,
  current_user,
  index,
  handleClick,
  logged_in,
}) => {
  if (!logged_in) {
  }
  return (
    <div className="review-card" key={index}>
      <div className="top-review">
        <div>
          <div className="flex-row mar-btm-xs">
            <Avatar alt="Remy Sharp" src="" />
            <p className="review-username">{review.username}</p>
          </div>
          <div className="flex-center">
            <Rating
              name="read-only"
              value={review.rating}
              readOnly
              size="large"
            />
          </div>
        </div>
        <div>
          <p className="review-difficulty">
            Difficulty Rating:&nbsp;&nbsp;<span>{review.difficulty}/10</span>
          </p>
          <p className="review-accessibility">
            Additional Accessibility Options:&nbsp;&nbsp;
            <span>{review.accessibility}</span>
          </p>
        </div>
      </div>
      <div className="bottom-review">
        <p>{review.review_text}</p>
      </div>
      {logged_in && current_user.id === review.user_id && (
        <div className="flex-row">
          <a href={`/editprotected/${review.id}`} className="btn">
            Edit Review
          </a>
          <a href="#" onClick={handleClick} className="btn">
            Delete Review
          </a>
        </div>
      )}
    </div>
  )
}

export default ReviewCard
