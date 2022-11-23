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

const App = (props) => {
  const [games, setGames] = useState([])
  const [reviews, setReviews] = useState([])
  const [foundGames, setFoundGames] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    readGame()
  }, [])

  useEffect(() => {
    readReview()
  }, [])

  const readGame = () => {
    fetch("/games")
      .then((response) => response.json())
      .then((payload) => {
        setGames(payload)
      })
      .catch((error) => console.log(error))
  }

  const readReview = () => {
    fetch("/reviews")
      .then((response) => response.json())
      .then((payload) => {
        setReviews(payload)
      })
      .catch((error) => console.log(error))
  }

  const createReview = (review) => {
    fetch("/reviews", {
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => readReview())
      .catch((errors) => console.log(errors))
  }

  const updateReview = (review, id) => {
    fetch(`/reviews/${id}`, {
      body: JSON.stringify(review),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then(() => readReview())
      .catch((errors) => console.log("Review Create Errors:", errors))
  }

  const deleteReview = (id) => {
    fetch(`/reviews/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => readReview())
      .catch((error) => console.log(error))
  }

  return (
    <>
      <BrowserRouter>
        <Header
          {...props}
          games={games}
          foundGames={foundGames}
          searchTerm={searchTerm}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                {...props}
                games={games}
                reviews={reviews}
                deleteReview={deleteReview}
              />
            }
          />

          <Route
            path="/gameindex"
            element={<GameIndex games={games} {...props} />}
          />
          <Route
            path="/gameshow/:id"
            element={
              <GameShow
                games={games}
                reviews={reviews}
                {...props}
                deleteReview={deleteReview}
              />
            }
          />
          <Route
            path="/reviewprotectedindex"
            element={
              <ReviewProtectedIndex
                reviews={reviews}
                {...props}
                deleteReview={deleteReview}
              />
            }
          />
          <Route
            path="/editprotected/:id"
            element={
              <EditProtected
                reviews={reviews}
                games={games}
                updateReview={updateReview}
                {...props}
              />
            }
          />
          <Route
            path="/createprotected/:id"
            element={
              <CreateProtected
                {...props}
                games={games}
                createReview={createReview}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer {...props} />
      </BrowserRouter>
    </>
  )
}

export default App
