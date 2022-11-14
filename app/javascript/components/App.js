import React from "react"
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import GameProtectedIndex from "./pages/GameProtectedIndex"
import GameIndex from "./pages/GameIndex"
import GameShow from "./pages/GameShow"
import ReviewProtectedIndex from "./pages/ReviewProtectedIndex"
import EditProtected from "./pages/EditProtected"
import CreateProtected from "./pages/CreateProtected"
import NotFound from "./pages/NotFound"
import Footer from "./components/Footer"
import mockGames from "./mockGames"
import mockReviews from "./mockReviews"

const App = (props) => {
  const [games, setGames] = useState(mockGames)
  const [reviews, setReviews] = useState(mockReviews)
  console.log(reviews, games)

  return (
    <>
      <BrowserRouter>
        <Header {...props} />
        <Routes>
          <Route
            path="/"
            element={<Home {...props} games={games} reviews={reviews} />}
          />
          <Route
            path="/gameprotectedindex"
            element={<GameProtectedIndex games={games} />}
          />
          <Route path="/gameindex" element={<GameIndex games={games} />} />
          <Route
            path="/gameshow"
            element={<GameShow games={games} reviews={reviews} />}
          />
          <Route
            path="/reviewprotectedindex"
            element={<ReviewProtectedIndex reviews={reviews} />}
          />
          <Route
            path="/editprotected"
            element={<EditProtected reviews={reviews} />}
          />
          <Route path="/createprotected" element={<CreateProtected />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer {...props} />
      </BrowserRouter>
    </>
  )
}

export default App
