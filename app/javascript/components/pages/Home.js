import React from "react"

const Home = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  if (logged_in) {
    return (
      <>
        <h1>You are logged in!</h1>
        <h1>{current_user.email}</h1>
      </>
    )
  }
  return (
    <div className="loggedOut">
      <h1>You are logged out!</h1>
    </div>
  )
}

export default Home
