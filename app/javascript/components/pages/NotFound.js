import React from "react"

const NotFound = () => {
  return (
    <>
      <div className="not-found logged-in-wrapper footer-bottom-wrapper flex-center">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div>
          <div className="flex-column">
            <h1>404</h1>
            <h3>Sorry, but the page you're looking for does not exist!</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
