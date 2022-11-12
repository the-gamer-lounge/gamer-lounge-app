require 'rails_helper'

RSpec.describe "Reviews", type: :request do
  let(:user) { User.create email: "test@example.com", password: "password", password_confirmation: "password" }
  let(:game) { Game.create(
    image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-000-ARTREVEAL-TOUT.jpg',
    title: 'Call of Duty®: Modern Warfare® II',
    price: 69.99,
    genre: 'FPS',
    release: '2022-10-27',
    description: 'Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.',
    player: 'Multiplayer',
    platforms: 'PC, XBOX, Playstation(4/5)',
    developer: 'Infinity Ward, Raven Software, Beenox, Treyarch, High Moon Studios, Sledgehammer Games, Activision Shanghai, Demonware, Toys for Bob'
)}
  describe "GET /index" do
    it "gets all the reviews" do
      review = user.reviews.create(
        game_id: game.id,
        review: "Starting with the campaign it was 17 missions long. Overall the missions were great, there were a few that seemed a little too long. The AC-130 mission for example took a little too long, but that's a preference as I prefer to play the boots on the ground missions. There is a mission towards the end that you have to sneak around and while sometimes it got confusing and you die quite a few times you get the hang of it and it becomes thriving. The graphics were great throughout the whole game and the design was very thought out. Moving onto the multiplayer, the maps are lacking... They don't give the same vibe as the previous OG modern warfare. However, the guns, and the weapon tuning are new and exciting. The weapon tuning gives the game a whole new dimension. I hope this gives Warzone a new look. Overall, I'm very happy with the happy thus-far and I look forward to what the future holds.",
        accessibility: "Yes",
        difficulty: 4,
        rating: 4.0
      )
      review.save
      get "/reviews"
      
      reviews = JSON.parse(response.body)
      expect(reviews.length).to eq 1
      expect(response).to have_http_status(200)
      review = reviews.first
      expect(review["accessibility"]).to eq "Yes"
      expect(review["difficulty"]).to eq 4
      expect(review["rating"]).to eq 4.0
    end
  end

  describe "GET /show/:id" do
    it "shows a single review" do
      newreview1 = Review.create(
        game_id: game.id,
        review: "Starting with the campaign it was 17 missions long. Overall the missions were great, there were a few that seemed a little too long. The AC-130 mission for example took a little too long, but that's a preference as I prefer to play the boots on the ground missions. There is a mission towards the end that you have to sneak around and while sometimes it got confusing and you die quite a few times you get the hang of it and it becomes thriving. The graphics were great throughout the whole game and the design was very thought out. Moving onto the multiplayer, the maps are lacking... They don't give the same vibe as the previous OG modern warfare. However, the guns, and the weapon tuning are new and exciting. The weapon tuning gives the game a whole new dimension. I hope this gives Warzone a new look. Overall, I'm very happy with the happy thus-far and I look forward to what the future holds.",
        accessibility: "Yes",
        difficulty: 4,
        rating: 4.0
      )

      newreview2 = Review.create(
        game_id: game.id,
        review: "Fortnite is an excellent game that is always changing. The developers realize that games need change and substance to go with it. Fortnite has been out for years and is still one of the best rated and played games out there. While its evolved over the years and has had it's ups and downs nobody can take away the fact the developers have gone above and beyond with the constant updates. Building is a thing of the past since the zero build mode has come out. It's brought new gamers to Fortnite who hated the building aspect and has been proven to be the new identity to Fortnite (atleast for me, I won't touch the building modes anymore). Building made it incredibly hard for the average gamer to hop on and play. Creative has taken video games to a different outlook as well with the different modes and how people can simply create their own world. I can go on and on, but Fortnite as a whole is a phenomenal game that is worth checking out.",
        accessibility: "Yes",
        difficulty: 7,
        rating: 4.7
      )
        get "/reviews/#{newreview2.id}"
        expect(response).to have_http_status(200)
    end
  end

describe "POST /create" do
  it "creates a review for a game" do
    review_params = {
      review: {
        game_id: game.id,
        user_id: user.id,
        review: "Fortnite is an excellent game that is always changing. The developers realize that games need change and substance to go with it. Fortnite has been out for years and is still one of the best rated and played games out there. While its evolved over the years and has had it's ups and downs nobody can take away the fact the developers have gone above and beyond with the constant updates. Building is a thing of the past since the zero build mode has come out. It's brought new gamers to Fortnite who hated the building aspect and has been proven to be the new identity to Fortnite (atleast for me, I won't touch the building modes anymore). Building made it incredibly hard for the average gamer to hop on and play. Creative has taken video games to a different outlook as well with the different modes and how people can simply create their own world. I can go on and on, but Fortnite as a whole is a phenomenal game that is worth checking out.",
        accessibility: "Yes",
        difficulty: 7,
        rating: 4.7
      }
    }

    post "/reviews", params: review_params
    JSON.parse(response.body)
    review = Review.first
    expect(response).to have_http_status(200)
    end
  end

  describe "PATCH /update" do
    it("updates a reviews") do
      review_params = {
        review: {
          game_id: game.id,
          user_id: user.id,
          review: "Fortnite is an excellent game that is always changing. The developers realize that games need change and substance to go with it. Fortnite has been out for years and is still one of the best rated and played games out there. While its evolved over the years and has had it's ups and downs nobody can take away the fact the developers have gone above and beyond with the constant updates. Building is a thing of the past since the zero build mode has come out. It's brought new gamers to Fortnite who hated the building aspect and has been proven to be the new identity to Fortnite (atleast for me, I won't touch the building modes anymore). Building made it incredibly hard for the average gamer to hop on and play. Creative has taken video games to a different outlook as well with the different modes and how people can simply create their own world. I can go on and on, but Fortnite as a whole is a phenomenal game that is worth checking out.",
          accessibility: "Yes",
          difficulty: 7,
          rating: 4.7
        }
      }

      post "/reviews", params: review_params
      review = Review.first
      JSON.parse(response.body)

      update_params = {
        review:  {
          game_id: game.id,
          user_id: user.id,
          review: "Fortnite is an excellent game that is always changing. The developers realize that games need change and substance to go with it. Fortnite has been out for years and is still one of the best rated and played games out there. While its evolved over the years and has had it's ups and downs nobody can take away the fact the developers have gone above and beyond with the constant updates. Building is a thing of the past since the zero build mode has come out. It's brought new gamers to Fortnite who hated the building aspect and has been proven to be the new identity to Fortnite (atleast for me, I won't touch the building modes anymore). Building made it incredibly hard for the average gamer to hop on and play. Creative has taken video games to a different outlook as well with the different modes and how people can simply create their own world. I can go on and on, but Fortnite as a whole is a phenomenal game that is worth checking out.",
          accessibility: "Yes",
          difficulty: 7,
          rating: 4.5
        }
      }

    patch "/reviews/#{review.id}", params: update_params
    review = Review.first
    expect(response).to have_http_status(200)
    expect(review.rating).to eq 4.5
    end
  end

  describe "DELETE /destroy" do
    it "deletes a review" do
      review_params = {
        review: {
          game_id: game.id,
          user_id: user.id,
          review: "Fortnite is an excellent game that is always changing. The developers realize that games need change and substance to go with it. Fortnite has been out for years and is still one of the best rated and played games out there. While its evolved over the years and has had it's ups and downs nobody can take away the fact the developers have gone above and beyond with the constant updates. Building is a thing of the past since the zero build mode has come out. It's brought new gamers to Fortnite who hated the building aspect and has been proven to be the new identity to Fortnite (atleast for me, I won't touch the building modes anymore). Building made it incredibly hard for the average gamer to hop on and play. Creative has taken video games to a different outlook as well with the different modes and how people can simply create their own world. I can go on and on, but Fortnite as a whole is a phenomenal game that is worth checking out.",
          accessibility: "Yes",
          difficulty: 7,
          rating: 4.5
        }
      }

      post "/reviews", params: review_params
      review = Review.first
      delete "/reviews/#{review.id}"
      expect(response).to have_http_status(200)
    end
  end

end