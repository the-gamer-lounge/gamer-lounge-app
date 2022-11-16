import React from "react"
import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import mockReviews from "../mockReviews"
import ReviewProtectedIndex from "./ReviewProtectedIndex"

const current_user = {
  email: "CODGOD@gmail.com",
  username: "CODGOD",
  id: 1,
  created_at: "2022-11-13T22:38:02.480Z",
  updated_at: "2022-11-13T22:38:02.480Z",
}

describe("<ReviewProtectedIndex />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ReviewProtectedIndex logged_in={true}/>
      </BrowserRouter>
    )
  })
  
  it ("renders the username without crashing", () => {
    render(
      <BrowserRouter>
        <ReviewProtectedIndex logged_in={true} reviews={mockReviews} current_user={current_user}/>
      </BrowserRouter>
    )
    mockReviews.filter((review) => review.user_id === 1).forEach((review) => 
    {
      const username = screen.getAllByText(review.username)
      expect(username).toBeTruthy()
    })
  })

  it ("renders the review without crashing", () => {
    render(
      <BrowserRouter>
        <ReviewProtectedIndex logged_in={true} reviews={mockReviews} current_user={current_user}/>
      </BrowserRouter>
    )
    mockReviews.filter((review) => review.user_id === 1)
    .forEach((review) => {
      const reviewText = screen.getByText(review.review)
      expect(reviewText).toBeInTheDocument()
    })
  })

})