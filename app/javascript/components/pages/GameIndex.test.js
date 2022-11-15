import React from "react"
import { screen, render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import mockGames from "../mockGames"
import userEvent from "@testing-library/user-event"
import GameIndex from "./GameIndex"

describe("<GameIndex />", () => {
  it("renders without crashing", () => {
    render(
      <BrowserRouter>
        <GameIndex />
      </BrowserRouter>
    )
  })
  it("renders game cards", () => {
    const div = document.createElement("div")
    render(<GameIndex games={mockGames} />, div)
  })

  it("renders game titles", () => {
    const div = document.createElement("div")
    render(<GameIndex games={mockGames} />, div)

    mockGames.forEach((game) => {
      const gameTitle = screen.getByText(game.title)
      expect(gameTitle).toBeInTheDocument()
    })
  })

  it("renders game images", () => {
    const div = document.createElement("div")
    render(<GameIndex games={mockGames} />, div)

    mockGames.forEach((game) => {
      const gameImage = screen.getAllByRole("img")
      expect(gameImage).toBeTruthy()
    })
  })
})
