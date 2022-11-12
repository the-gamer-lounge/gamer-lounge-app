import React from "react"

const Footer = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
}) => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-left">
          {logged_in && <a href={sign_out_route}>Sign Out</a>}
          {!logged_in && <a href={new_user_route}>Sign Up</a>}
          {!logged_in && <a href={sign_in_route}>Sign In</a>}
          <p>
            &copy;{" "}
            <a href="https://www.linkedin.com/in/rhodesmt/">Matthew Rhodes</a>,
            <a href="https://www.linkedin.com/in/ari-brashear/">
              {" "}
              Ari Brashear
            </a>
            , &{" "}
            <a href="https://www.linkedin.com/in/zacheryrohde/">Zack Rohde</a>
          </p>
        </div>
        <div className="footer-right">
          {logged_in && <a href="/reviewprotectedindex">My Reviews</a>}
          <a href="/gameindex">Games</a>
          <a href="/">Home</a>
        </div>
      </div>
    </>
  )
}

export default Footer
