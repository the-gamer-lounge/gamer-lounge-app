import React from "react"
import ReviewCard from "../components/ReviewCard"
import GameCard from "../components/GameCard"

const Home = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
  games,
  reviews,
}) => {
  let randomGame = Math.floor(Math.random() * games.length + 1)

  if (logged_in) {
    return (
      <>
        {/* This is for the home page animation */}
        <div className="logged-in-wrapper flex-center">
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
              {/* <div className="">
                <a href={`/gameshow/${randomGame}`} className="shine-btn">
                  Random Game
                </a>
              </div> */}
            </div>
            <div className="welcome-column">
              <h2 className="flex-center mar-btm-lg">
                Welcome Back, {current_user.username}!
              </h2>

              <div className="recent-reviews">
                <h3 className="flex-center mar-btm-sm">Your Last Review:</h3>
                <div className="review-map-home flex-row">
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
        <div id="hero-section" className="hero-section mar-btm-xl">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="mar-btm-lg">Welcome to the Lounge.</h1>
              <div className="flex-row">
                <a href="#how-section" className="home-btn">
                  Learn More
                </a>
                <a href="" className="home-btn">
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
                <div className="how-image mar-btm-sm">
                  <p>Sign Up</p>
                </div>
                <div className="how-text">
                  <p>
                    Here at The Gamer Lounge, we give the power back to gamers like you! Create an account, search through our library and share your thoughts with others! 
                  </p>
                </div>
              </div>
              <div className="how-card">
                <div className="how-image mar-btm-sm">
                  <p>Browse Reviews</p>
                </div>
                <div className="how-text">
                  <p>
                    Search our game library to find your favorite games and see why other people enjoy it, See your most recently viewed games and reviews to hot-drop right back into the action.
                  </p>
                </div>
              </div>
              <div className="how-card">
                <div className="how-image mar-btm-sm">
                  <p>Write Your Own</p>
                </div>
                <div className="how-text">
                  <p>
                    We want to hear your thoughts! Tell us why you love your favorite game, or why you wouldn't wish it on your worst enemy. Quit wasting time and start #lounging today!
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
            <div className="about-card flex-row">
              <div className="image-circle"></div>
              <div className="about-me-text">
                <h3>Design Lead: Ari Brashear</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum non eleifend nisi, eget suscipit orci. Ut congue
                  sed mi eu consectetur. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus. Vivamus id posuere neque. Orci
                  varius natoque penatibus et magnis dis parturient montes. Orci
                  varius natoque penatibus et magnis dis parturient montes.
                </p>
              </div>
            </div>
            <div className="about-card flex-row">
              <div className="about-me-text">
                <h3>Product Manager: Zack Rohde</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum non eleifend nisi, eget suscipit orci. Ut congue
                  sed mi eu consectetur. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus. Vivamus id posuere neque. Orci
                  varius natoque penatibus et magnis dis parturient montes. Orci
                  varius natoque penatibus et magnis dis parturient montes.
                </p>
              </div>
              <div className="image-circle"></div>
            </div>
            <div className="about-card flex-row">
              <div className="image-circle"></div>
              <div className="about-me-text about-text-middle">
                <h3>Tech Lead: Matthew Rhodes</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum non eleifend nisi, eget suscipit orci. Ut congue
                  sed mi eu consectetur. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus. Vivamus id posuere neque. Orci
                  varius natoque penatibus et magnis dis parturient montes. Orci
                  varius natoque penatibus et magnis dis parturient montes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
