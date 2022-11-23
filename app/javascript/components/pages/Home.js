import React from "react"
import ReviewCard from "../components/ReviewCard"
import GameCard from "../components/GameCard"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ChatIcon from "@mui/icons-material/Chat"
import BorderColorIcon from "@mui/icons-material/BorderColor"

const Home = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
  games,
  reviews,
  deleteReview,
}) => {
  if (logged_in) {
    let userReviewLength = reviews?.filter(
      (review) => review.user_id === current_user.id
    ).length
    return (
      <>
        {/* This is for the home page animation */}
        <div className="logged-in-wrapper footer-bottom-wrapper flex-center">
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
          <div className="dashboard-home flex-row">
            <div className="recent-games-column flex-column">
              <h3 className="flex-center">Recent Games:</h3>
              {games?.slice(-2).map((game, index) => {
                return (
                  <GameCard game={game} index={index} logged_in={logged_in} />
                )
              })}
            </div>
            <div className="welcome-column flex-column">
              <h4 className=" mar-btm-md welcome-header">
                Welcome Back, {current_user.username}!
              </h4>

              <div className="recent-reviews">
                <h3 className="flex-center mar-btm-sm">Your Last Review:</h3>
                <div className="review-map-home flex-row">
                  {userReviewLength === 0 && (
                    <div className="no-review-text mar-btm-md flex-column">
                      <h3>You don't currently have any reviews.</h3>
                      <h3>
                        Maybe it's time to&nbsp;
                        <a href="/gameindex">check out some games?</a>
                      </h3>
                    </div>
                  )}
                  {reviews
                    ?.slice(-1)
                    .filter((review) => review.user_id === current_user.id)
                    .map((review, index) => {
                      const handleClick = () => {
                        const response = confirm(
                          "Are you sure you want to delete this review as this cannot be undone."
                        )
                        if (response) {
                          deleteReview(review.id)
                        } else if (!response) {
                        }
                      }
                      return (
                        <div className="home-review mar-btm-sm">
                          <ReviewCard
                            review={review}
                            current_user={current_user}
                            index={index}
                            handleClick={handleClick}
                            logged_in={logged_in}
                          />
                        </div>
                      )
                    })}
                </div>
                <div className="flex-row">
                  <a href="/reviewprotectedindex" className="shine-btn">
                    Your Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else if (!logged_in) {
    return (
      <>
        <div className="logged-out-wrapper">
          <div id="hero-section" className="hero-section mar-btm-xl">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="mar-btm-lg">Welcome to the Lounge.</h1>
                <div className="flex-row">
                  <a href="#how-section" className="home-btn">
                    Learn More
                  </a>
                  <a href={new_user_route} className="home-btn">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="how-section" className="how-section mar-btm-xl">
            <div className="how-content flex-column">
              <div className="how-header mar-btm-md">
                <h2>How it Works</h2>
              </div>
              <div className="how-card-container">
                <div className="how-card">
                  <div className="flex-column">
                    <AccountCircleIcon
                      sx={{ fontSize: "8.0rem" }}
                      className="mar-btm-xs"
                    />
                    <h3>Sign Up</h3>
                  </div>
                  <div className="how-text">
                    <p>
                      Here at The Gamer Lounge, we give the power back to gamers
                      like you! Create an account, add a username, search
                      through our library of games, and share your thoughts with
                      others!
                    </p>
                  </div>
                </div>
                <div className="how-card">
                  <div className="flex-column">
                    <ChatIcon
                      sx={{ fontSize: "8.0rem" }}
                      className="mar-btm-xs"
                    />
                    <h3>Browse Reviews</h3>
                  </div>
                  <div className="how-text">
                    <p>
                      Search our game library to find your favorite games and
                      see why other people enjoy it, See your most recently
                      viewed games and reviews to hot-drop right back into the
                      action.
                    </p>
                  </div>
                </div>
                <div className="how-card">
                  <div className="flex-column">
                    <BorderColorIcon
                      sx={{ fontSize: "8.0rem" }}
                      className="mar-btm-xs"
                    />
                    <h3>Write Your Own</h3>
                  </div>
                  <div className="how-text">
                    <p>
                      We want to hear your thoughts! Tell us why you love your
                      favorite game, or why you wouldn't wish it on your worst
                      enemy. Quit wasting time and start #lounging today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-us-section">
            <div className="about-us-content flex-column">
              <div className="about-us-header">
                <h2>About Us</h2>
              </div>
              <div className="about-card flex-row mar-btm-sm">
                <div
                  className="image-circle"
                  style={{
                    background:
                      "url(" + "https://i.imgur.com/pU0HklB.jpg" + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="about-me-text">
                  <h3>
                    Design Lead:&nbsp;<span>Ari Brashear</span>
                  </h3>
                  <p>
                    I’m a full-stack developer student at LEARN Academy, a
                    4-month coding bootcamp here in San Diego that’s helped me
                    learn the foundational skills of becoming a web developer. I
                    love getting to work with people and help break down their
                    complex problems into digestible solutions, so coding has
                    been a very natural transition for me! I’m especially
                    passionate about UI/UX, and making websites accessible and
                    intuitive for users.
                  </p>
                </div>
              </div>
              <div className="about-card flex-row mar-btm-sm">
                <div className="about-me-text ">
                  <h3>
                    Product Manager:&nbsp;<span>Zack Rohde</span>
                  </h3>
                  <p>
                    Hey! My name is Zack Rohde and I am a full stack engineer
                    that transitioned from the Marine Corps Infantry. Video
                    games have always been a big part of my life and creating a
                    website that I could rely on to get the best reviews just
                    wasn’t out there.. The Gamer Lounge did just that with more
                    to come.
                  </p>
                </div>
                <div
                  className="image-circle"
                  style={{
                    background:
                      "url(" + "https://i.imgur.com/CSqvKWi.png" + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              </div>
              <div className="about-card flex-row mar-btm-sm">
                <div
                  className="image-circle"
                  style={{
                    background:
                      "url(" + "https://i.imgur.com/UUyoBev.jpg" + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="about-me-text ">
                  <h3>
                    Tech Lead:&nbsp;<span>Matthew Rhodes</span>
                  </h3>
                  <p>
                    Hi, I’m my name is Matthew Rhodes! I am a full-stack
                    software developer who found a passion for software while
                    serving as a Submarine Sonar Technician. I love playing
                    video games, spending time with my dogs, and traveling with
                    my beautiful girlfriend Josie. See you in the Warzone!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
