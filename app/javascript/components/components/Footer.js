import React from "react"
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"
import HomeIcon from "@mui/icons-material/Home"
import ChatIcon from "@mui/icons-material/Chat"

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
        <div className="footer-left flex-column">
          {logged_in && (
            <a href={sign_out_route} className="footer-devise">
              Sign Out
            </a>
          )}
          {!logged_in && (
            <a href={new_user_route} className="footer-devise">
              Sign Up
            </a>
          )}
          {!logged_in && (
            <a href={sign_in_route} className="footer-devise">
              Sign In
            </a>
          )}
          <p>
            &copy;
            <a href="https://www.linkedin.com/in/rhodesmt/">Matthew Rhodes</a>,
            <a href="https://www.linkedin.com/in/ari-brashear/">
              &nbsp;Ari Brashear
            </a>
            ,&nbsp;&&nbsp;
            <a href="https://www.linkedin.com/in/zacheryrohde/">Zack Rohde</a>
          </p>
        </div>
        <div className="footer-right flex-row">
          {logged_in && (
            <a href="/reviewprotectedindex">
              <span className="flex-center">
                <ChatIcon />
                &nbsp;My Reviews
              </span>
            </a>
          )}
          <a href="/gameindex">
            <span className="flex-center">
              <SportsEsportsIcon />
              &nbsp;Games
            </span>
          </a>
          <a href="/">
            <span className="flex-center">
              <HomeIcon />
              &nbsp;Home
            </span>
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer
