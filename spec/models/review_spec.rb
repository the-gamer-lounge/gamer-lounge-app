require 'rails_helper'

RSpec.describe Review, type: :model do
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
  
  it 'is not valid without a review' do
    review = Review.create(
      user_id: user.id,
      game_id: game.id,
      review: "",
      accessibility: "Yes",
      difficulty: 4,
      rating: 4.0
    )
    review.validate
    expect(review.errors[:review]).to_not be_empty
  end

it 'is not valid without a user_id' do
    review = Review.create(
      game_id: game.id,
      review: "Starting with the campaign it was 17 missions long. Overall the missions were great, there were a few that seemed a little too long. The AC-130 mission for example took a little too long, but that's a preference as I prefer to play the boots on the ground missions. There is a mission towards the end that you have to sneak around and while sometimes it got confusing and you die quite a few times you get the hang of it and it becomes thriving. The graphics were great throughout the whole game and the design was very thought out. Moving onto the multiplayer, the maps are lacking... They don't give the same vibe as the previous OG modern warfare. However, the guns, and the weapon tuning are new and exciting. The weapon tuning gives the game a whole new dimension. I hope this gives Warzone a new look. Overall, I'm very happy with the happy thus-far and I look forward to what the future holds.",
      accessibility: "Yes",
      difficulty: 4,
      rating: 4.0
    )
    review.validate
    expect(review.errors[:user_id]).to_not be_empty
  end

  it 'is not valid without a game_id' do
    review = Review.create(
      user_id: user.id,
      review: "Starting with the campaign it was 17 missions long. Overall the missions were great, there were a few that seemed a little too long. The AC-130 mission for example took a little too long, but that's a preference as I prefer to play the boots on the ground missions. There is a mission towards the end that you have to sneak around and while sometimes it got confusing and you die quite a few times you get the hang of it and it becomes thriving. The graphics were great throughout the whole game and the design was very thought out. Moving onto the multiplayer, the maps are lacking... They don't give the same vibe as the previous OG modern warfare. However, the guns, and the weapon tuning are new and exciting. The weapon tuning gives the game a whole new dimension. I hope this gives Warzone a new look. Overall, I'm very happy with the happy thus-far and I look forward to what the future holds.",
      accessibility: "Yes",
      difficulty: 4,
      rating: 4.0
    )
    review.validate
    expect(review.errors[:game_id]).to_not be_empty
  end

  it 'is not valid without a accessibility' do
    review = Review.create(
      game_id: game.id,
      review: "Starting with the campaign it was 17 missions long. Overall the missions were great, there were a few that seemed a little too long. The AC-130 mission for example took a little too long, but that's a preference as I prefer to play the boots on the ground missions. There is a mission towards the end that you have to sneak around and while sometimes it got confusing and you die quite a few times you get the hang of it and it becomes thriving. The graphics were great throughout the whole game and the design was very thought out. Moving onto the multiplayer, the maps are lacking... They don't give the same vibe as the previous OG modern warfare. However, the guns, and the weapon tuning are new and exciting. The weapon tuning gives the game a whole new dimension. I hope this gives Warzone a new look. Overall, I'm very happy with the happy thus-far and I look forward to what the future holds.",
      difficulty: 4,
      rating: 4.0
    )
    review.validate
    expect(review.errors[:accessibility]).to_not be_empty
  end

  it 'is not valid without a difficulty' do
    review = Review.create(
      game_id: game.id,
      review: "Starting with the campaign it was 17 missions long. Overall the missions were great, there were a few that seemed a little too long. The AC-130 mission for example took a little too long, but that's a preference as I prefer to play the boots on the ground missions. There is a mission towards the end that you have to sneak around and while sometimes it got confusing and you die quite a few times you get the hang of it and it becomes thriving. The graphics were great throughout the whole game and the design was very thought out. Moving onto the multiplayer, the maps are lacking... They don't give the same vibe as the previous OG modern warfare. However, the guns, and the weapon tuning are new and exciting. The weapon tuning gives the game a whole new dimension. I hope this gives Warzone a new look. Overall, I'm very happy with the happy thus-far and I look forward to what the future holds.",
      accessibility: "Yes",
      rating: 4.0
    )
    review.validate
    expect(review.errors[:difficulty]).to_not be_empty
  end

  it 'is not valid without a rating' do
    review = Review.create(
      game_id: game.id,
      review: "Starting with the campaign it was 17 missions long. Overall the missions were great, there were a few that seemed a little too long. The AC-130 mission for example took a little too long, but that's a preference as I prefer to play the boots on the ground missions. There is a mission towards the end that you have to sneak around and while sometimes it got confusing and you die quite a few times you get the hang of it and it becomes thriving. The graphics were great throughout the whole game and the design was very thought out. Moving onto the multiplayer, the maps are lacking... They don't give the same vibe as the previous OG modern warfare. However, the guns, and the weapon tuning are new and exciting. The weapon tuning gives the game a whole new dimension. I hope this gives Warzone a new look. Overall, I'm very happy with the happy thus-far and I look forward to what the future holds.",
      accessibility: "Yes",
      difficulty: 4,
    )
    review.validate
    expect(review.errors[:rating]).to_not be_empty
  end

end
