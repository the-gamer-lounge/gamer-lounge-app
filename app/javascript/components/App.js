import React, { useEffect } from "react"
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
  const [games, setGames] = useState([])
  const [reviews, setReviews] = useState([])

useEffect(() => {
  readGame()
}, [])

useEffect(() => {
  readReview()
}, [])

const deleteReview = (id) => {
}

const readGame = () => {
  fetch("http://localhost:3000/games")
  .then((response) => response.json())
  .then((payload) => {
    setGames(payload)
  })
  .catch((error) => console.log(error)) 
}

const readReview = () => {
  fetch("http://localhost:3000/reviews")
  .then((response) => response.json())
  .then((payload) => {
    setReviews(payload)
  })
  .catch((error) => console.log(error))
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
            element={<GameIndex games={games} {...props}  />}
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
