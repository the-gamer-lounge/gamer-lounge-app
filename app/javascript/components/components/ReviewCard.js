import React from "react"
import Rating from "@mui/material/Rating"
import { Avatar } from "@mui/material"

const ReviewCard = ({ review, current_user, index, handleClick }) => {
  return (
    <div className="review-card" key={index}>
      <div className="top-review">
        <div>
          <div className="flex-row mar-btm-xs">
            {/* <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="user-icon"
              className="user-img"
            /> */}
            <Avatar alt="Remy Sharp" src="" />
            <p className="review-username">{current_user.username}</p>
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
            Difficulty Rating:&nbsp;<span>{review.difficulty}/10</span>
          </p>
          <p className="review-accessibility">
            Additional Accessibility Options:&nbsp;
            <span>{review.accessibility}</span>
          </p>
        </div>
      </div>
      <div className="bottom-review">
        <p>{review.review_text}</p>
      </div>
      <div className="flex-row">
        <a href={`/editprotected/${review.id}`} className="review-btn">
          Edit Review
        </a>
        <a href="#" onClick={handleClick} className="review-btn">
          Delete Review
        </a>
      </div>
    </div>
  )
}

export default ReviewCard
