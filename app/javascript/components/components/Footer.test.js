import React from "react"
import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Footer from "./Footer"

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Footer />, div)
  })
  it("displays footer text", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const ariName = screen.getByText(/ari brashear/i)
    expect(ariName).toBeInTheDocument
    const zackName = screen.getByText(/zack rohde/i)
    expect(zackName).toBeInTheDocument
    const mattName = screen.getByText(/matthew rhodes/i)
    expect(mattName).toBeInTheDocument
  })

  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText(/games/i))
    expect(screen.getByText(/games/i).closest("a")).toHaveAttribute(
      "href",
      "/gameindex"
    )

    userEvent.click(screen.getByText(/home/i))
    expect(screen.getByText(/home/i).closest("a")).toHaveAttribute("href", "/")

    userEvent.click(screen.getByText(/matthew rhodes/i))
    expect(screen.getByText(/matthew rhodes/i).closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/rhodesmt/"
    )

    userEvent.click(screen.getByText(/ari brashear/i))
    expect(screen.getByText(/ari brashear/i).closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/ari-brashear/"
    )

    userEvent.click(screen.getByText(/zack rohde/i))
    expect(screen.getByText(/zack rohde/i).closest("a")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/zacheryrohde/"
    )
  })
})
