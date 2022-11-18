import React from "react"

const Home = ({
  logged_in,
  current_user,
  new_user_route,
  sign_in_route,
  sign_out_route,
  games,
  reviews,
}) => {
  if (logged_in) {
    return (
      <>
        <div className="logged-in-wrapper flex-center">
          <div className="dashboard-home flex-row">
            <div className="recent-games">
              <h3 className="flex-center mar-btm-sm">Recent Games</h3>
              {games?.map((game, index) => {
                return (
                  <div className="game-card flex-column" key={index}>
                    <img src={game.image} className="game-img" />
                    <p>{game.title}</p>
                    <div className="flex-row">
                      <a href={`/gameshow/${game.id}`}>See Reviews</a>
                      {logged_in && (
                        <a href={`/createprotected/${game.id}`}>Add Review</a>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="welcome-column flex-column">
              <div className="user-welcome mar-btm-md">
                <h2>Welcome Back, {current_user.username}!</h2>
              </div>
              <div className="recent-reviews flex-column">
                <h3 className="mar-btm-sm">Your Recent Reviews:</h3>
                {reviews
                  ?.filter((review) => review.user_id === current_user.id)
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
                      <div className="review-card" key={index}>
                        <div className="flex-row">
                          <div>
                            {" "}
                            <p>{current_user.username}</p>{" "}
                            <p>{review.difficulty}</p>{" "}
                            <p>{review.accessibility}</p>{" "}
                          </div>
                          <div>
                            {" "}
                            <p>{review.rating}</p>{" "}
                          </div>
                        </div>
                        <div>
                          {" "}
                          <p>{review.review_text}</p>{" "}
                        </div>
                        <div className="mar-btm-sm">
                          {" "}
                          <a href={`/editprotected/${review.id}`}>
                            {" "}
                            Edit Review{" "}
                          </a>{" "}
                          <a href={"#"} onClick={handleClick}>
                            {" "}
                            Delete Review{" "}
                          </a>{" "}
                        </div>
                      </div>
                    )
                  })}
                <a href="/reviewprotectedindex">Your Reviews</a>
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
                <a href="#how-section" className="btn">
                  Learn More
                </a>
                <a href="" className="btn">
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
                    orem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum non eleifend nisi, eget suscipit orci. Ut congue
                    sed mi eu consectetur. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. Vivamus id posuere neque. Orci
                    varius natoque penatibus et magnis dis parturient montes.
                  </p>
                </div>
              </div>
              <div className="how-card">
                <div className="how-image mar-btm-sm">
                  <p>Browse Reviews</p>
                </div>
                <div className="how-text">
                  <p>
                    orem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum non eleifend nisi, eget suscipit orci. Ut congue
                    sed mi eu consectetur. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. Vivamus id posuere neque. Orci
                    varius natoque penatibus et magnis dis parturient montes.
                  </p>
                </div>
              </div>
              <div className="how-card">
                <div className="how-image mar-btm-sm">
                  <p>Write Your Own</p>
                </div>
                <div className="how-text">
                  <p>
                    orem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum non eleifend nisi, eget suscipit orci. Ut congue
                    sed mi eu consectetur. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. Vivamus id posuere neque. Orci
                    varius natoque penatibus et magnis dis parturient montes.
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
