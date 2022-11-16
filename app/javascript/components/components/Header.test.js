import React from "react"
import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "./Header"

describe("<Header/>", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })

  it("displays universal navigation links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const home = screen.getAllByText(/home/i)
    expect(home).toBeTruthy()

    const games = screen.getAllByText(/games/i)
    expect(games).toBeTruthy()
  })

  it("displays logged in links", () => {
    render(
      <BrowserRouter>
        <Header logged_in={true} />
      </BrowserRouter>
    )
    const logOut = screen.getAllByText(/log out/i)
    expect(logOut).toBeTruthy()
  })

  it("displays logged out links", () => {
    render(
      <BrowserRouter>
        <Header logged_in={false} />
      </BrowserRouter>
    )
    const logIn = screen.getAllByText(/sign in/i)
    expect(logIn).toBeTruthy()

    const signUp = screen.getAllByText(/sign up/i)
    expect(signUp).toBeTruthy()
  })

  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header logged_in={true} />
      </BrowserRouter>
    )
    screen.debug()
    const home = screen.getByRole("link", { name: "Home" })
    expect(home).toHaveAttribute("href", "/")

    const games = screen.getByRole("link", { name: "Games" })
    expect(games).toHaveAttribute("href", "/gameindex")

    const reviews = screen.getByRole("link", { name: "My Reviews" })
    expect(reviews).toHaveAttribute("href", "/reviewprotectedindex")
  })
})
