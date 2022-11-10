import React from "react"
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

const App = (props) => {
  return (
    <>
      <BrowserRouter>
        <Header {...props} />
        <Routes>
          <Route path="/" element={<Home {...props} />} />
          <Route path="/gameprotectedindex" element={<GameProtectedIndex />} />
          <Route path="/gameindex" element={<GameIndex />} />
          <Route path="/gameshow" element={<GameShow />} />
          <Route
            path="/reviewprotectedindex"
            element={<ReviewProtectedIndex />}
          />
          <Route path="/editprotected" element={<EditProtected />} />
          <Route path="/createprotected" element={<CreateProtected />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
