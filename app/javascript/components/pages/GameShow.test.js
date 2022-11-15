import React from "react";
import { screen, render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import mockGames from "../mockGames";
import mockReviews from "../mockReviews";
import GameShow from "./GameShow";

describe("<GameShow />", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter initialEntries={["/gameshow/1"]}>
        <Routes>
          <Route
            path="/gameshow/:id"
            element={<GameShow games={mockGames} reviews={mockReviews} />}
          />
        </Routes>
      </MemoryRouter>
    );
  });
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={["/gameshow/1"]}>
        <Routes>
          <Route
            path="/gameshow/:id"
            element={<GameShow games={mockGames} reviews={mockReviews} />}
          />
        </Routes>
      </MemoryRouter>
    );
  });
  it("renders game title", () => {
    const testGame = mockGames.filter((game) => game.id === 1);
    const title = screen.getByText(testGame[0].title);
    expect(title).toBeInTheDocument();
  });
  it("renders game image", () => {
    const testGame = mockGames.filter((game) => game.id === 1);
    const gameImage = screen.getByRole("img");
    expect(gameImage).toBeTruthy();
  });
  it("renders game price", () => {
    const testGame = mockGames.filter((game) => game.id === 1);
    const gamePrice = screen.getByText(testGame[0].price);
    expect(gamePrice).toBeInTheDocument();
  });
  it("renders game genre", () => {
    const testGame = mockGames.filter((game) => game.id === 1);
    const gameGenre = screen.getByText(testGame[0].genre);
    expect(gameGenre).toBeInTheDocument();
  });
  it("renders game release date", () => {
    const testGame = mockGames.filter((game) => game.id === 1);
    const gameDate = screen.getByText(testGame[0].release);
    expect(gameDate).toBeInTheDocument();
  });
  it("renders game description", () => {
    const testGame = mockGames.filter((game) => game.id === 1);
    const gameDescription = screen.getByText(testGame[0].description);
    expect(gameDescription).toBeInTheDocument();
  });
  it("renders game player count", () => {
    const testGame = mockGames.filter((game) => game.id === 1);
    const gamePlayer = screen.getByText(testGame[0].player);
    expect(gamePlayer).toBeInTheDocument();
  });
  it("renders game platforms", () => {
    const testGame = mockGames.filter((game) => game.id === 1);
    const gamePlatform = screen.getByText(testGame[0].platforms);
    expect(gamePlatform).toBeInTheDocument();
  });
  it("renders game developer(s)", () => {
    const testGame = mockGames.filter((game) => game.id === 1);
    const gameDeveloper = screen.getByText(testGame[0].developer);
    expect(gameDeveloper).toBeInTheDocument();
  });
  //   testing for the reviews portion of the /gameshow/:id page
  it("renders the username for the review", () => {
    const testReview = mockReviews.filter((review) => review.game_id === 1);
    const gameReview = screen.getByText(testReview[0].username);
    expect(gameReview).toBeInTheDocument();
  });
  it("renders the accessibility rating for the review", () => {
    const testReview = mockReviews
      .filter((review) => review.game_id === 1)
      .forEach((review) => {
        const reviewAccess = screen.getAllByText(review.accessibility);
        expect(reviewAccess).toBeTruthy();
      });
    });
    it("renders the review", () => {
      const testReview = mockReviews
        .filter((review) => review.game_id === 1)
        .forEach((review) => {
          const reviewText = screen.getByText(review.review);
          expect(reviewText).toBeInTheDocument();
        });
  });
    it("renders the review difficulty", () => {
      const testReview = mockReviews
        .filter((review) => review.game_id === 1)
        .forEach((review) => {
          const reviewDifficulty = screen.getAllByText(review.difficulty);
          expect(reviewDifficulty).toBeTruthy();
        });
  });
    it("renders the review rating", () => {
      const testReview = mockReviews
        .filter((review) => review.game_id === 1)
        .forEach((review) => {
          const reviewRating = screen.getAllByText(review.rating);
          expect(reviewRating).toBeTruthy();
        });
  });
});
