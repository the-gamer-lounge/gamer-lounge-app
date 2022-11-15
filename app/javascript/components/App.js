import React from "react"
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
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


const deleteReview = (id) => {
}

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
            path="/gameindex"
            element={<GameIndex games={games} {...props} />}
          />
          <Route
            path="/gameshow/:id"
            element={<GameShow games={games} reviews={reviews} {...props} />}
          />
          <Route
            path="/reviewprotectedindex"
            element={<ReviewProtectedIndex reviews={reviews} {...props} />}
          />
          <Route
            path="/editprotected/:id"
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
