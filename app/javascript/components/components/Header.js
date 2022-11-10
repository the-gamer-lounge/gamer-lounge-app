import React from "react"

const Header = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <>
      <a href={new_user_route}>Sign Up</a>
      <a href={sign_in_route}>Sign In</a>
      <a href={sign_out_route}>Sign Out</a>
      <h2>Header</h2>
    </>
  )
}

export default Header
