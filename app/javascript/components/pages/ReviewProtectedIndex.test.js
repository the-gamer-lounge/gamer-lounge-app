import React from "react"
import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import mockReviews from "../mockReviews"
import ReviewProtectedIndex from "./ReviewProtectedIndex"

const current_user = {
  email: "manager@gmail.com",
  username: "Rodeo",
  id: "1",
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
    const div = document.createElement("div")
    render(<ReviewProtectedIndex logged_in={true} current_user={current_user} reviews={mockReviews} />, div)
    screen.debug()
    mockReviews.filter((review) => review.user_id === 1).forEach((review) => 
    {
      const username = screen.getByText(review.username)
      expect(username).toBeInTheDocument()
    })
  })
})