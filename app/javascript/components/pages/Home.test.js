import React from "react"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import mockReviews from "../mockReviews"
import Home from "./Home"

const current_user = {
    email: "CODGOD@gmail.com",
    username: "CODGOD",
    id: 1,
    created_at: "2022-11-13T22:38:02.480Z",
    updated_at: "2022-11-13T22:38:02.480Z",
  }

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
  })

  it("renders the logged in page", () => {
    render (
        <BrowserRouter>
        <Home logged_in={true} current_user={current_user}/> 
        </BrowserRouter>
    )
  })

  it("renders the logged out page", () => {
    render (
        <BrowserRouter>
        <Home logged_in={false}/>
        </BrowserRouter>
    )
  })

  it ("renders the review cards", () => {
    render (
        <BrowserRouter>
        <Home logged_in={true} current_user={current_user} reviews={mockReviews}/>
        </BrowserRouter>
    )
  })
})