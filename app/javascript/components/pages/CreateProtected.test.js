import React from "react"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CreateProtected from "./CreateProtected" 

describe("<CreateProtected />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
      <CreateProtected logged_in={true}/>
      </BrowserRouter>
    )
  })
})