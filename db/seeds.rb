# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.where(email: "test1@example.com",  username: "Rohdinski").first_or_create(password: "password", password_confirmation: "password")

game1 = Game.create(
  image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-000-ARTREVEAL-TOUT.jpg',
  title: 'Call of Duty®: Modern Warfare® II',
  price: 69.99,
  genre: 'FPS',
  release: '2022-10-27',
  description: 'Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.',
  player: 'Multiplayer',
  platforms: 'PC, XBOX, Playstation(4/5)',
  developer: 'Infinity Ward, Raven Software, Beenox, Treyarch, High Moon Studios, Sledgehammer Games, Activision Shanghai, Demonware, Toys for Bob'
)

review_seeds1 = [
  {
    game_id: game1.id,
    review: "Starting with the campaign it was 17 missions long. Overall the missions were great, there were a few that seemed a little too long. The AC-130 mission for example took a little too long, but that's a preference as I prefer to play the boots on the ground missions. There is a mission towards the end that you have to sneak around and while sometimes it got confusing and you die quite a few times you get the hang of it and it becomes thriving. The graphics were great throughout the whole game and the design was very thought out. Moving onto the multiplayer, the maps are lacking... They don't give the same vibe as the previous OG modern warfare. However, the guns, and the weapon tuning are new and exciting. The weapon tuning gives the game a whole new dimension. I hope this gives Warzone a new look. Overall, I'm very happy with the happy thus-far and I look forward to what the future holds.",
    accessibility: "Yes",
    difficulty: 4,
    rating: 4.0
  },
  {
    game_id: game1.id,
    review: "Starting with the campaign it was 17 missions long. Overall the missions were great, there were a few that seemed a little too long. The AC-130 mission for example took a little too long, but that's a preference as I prefer to play the boots on the ground missions. There is a mission towards the end that you have to sneak around and while sometimes it got confusing and you die quite a few times you get the hang of it and it becomes thriving. The graphics were great throughout the whole game and the design was very thought out. Moving onto the multiplayer, the maps are lacking... They don't give the same vibe as the previous OG modern warfare. However, the guns, and the weapon tuning are new and exciting. The weapon tuning gives the game a whole new dimension. I hope this gives Warzone a new look. Overall, I'm very happy with the happy thus-far and I look forward to what the future holds.",
    accessibility: "Yes",
    difficulty: 6,
    rating: 3.8
  }
]

user2 = User.where(email: "test2@example.com", username: "Sonar").first_or_create(password: "password", password_confirmation: "password")

game2 = Game.create(
  image: "https://i.imgur.com/8at4tcA.jpg",
  title: "Fortnite",
  price: 0,
  genre: "Battle Royale",
  release: "2017-7-21",
  description: "In Fortnite, players collaborate to survive in an open-world environment, by battling other characters who are controlled either by the game itself, or by other players.",
  player: "Multiplayer",
  platforms: "PC, Mac, Xbox(One, OneS, OneX), Playstation(4/5), Andriod, iOS, Nintendo Switch",
  developer: "Epic Games"
)

review_seeds2 = [
{
    game_id: game2.id,
    review: "Fortnite is an excellent game that is always changing. The developers realize that games need change and substance to go with it. Fortnite has been out for years and is still one of the best rated and played games out there. While its evolved over the years and has had it's ups and downs nobody can take away the fact the developers have gone above and beyond with the constant updates. Building is a thing of the past since the zero build mode has come out. It's brought new gamers to Fortnite who hated the building aspect and has been proven to be the new identity to Fortnite (atleast for me, I won't touch the building modes anymore). Building made it incredibly hard for the average gamer to hop on and play. Creative has taken video games to a different outlook as well with the different modes and how people can simply create their own world. I can go on and on, but Fortnite as a whole is a phenomenal game that is worth checking out.",
    accessibility: "Yes",
    difficulty: 7,
    rating: 4.7
  },
  {
    game_id: game2.id,
    review: "Fortnite is an excellent game that is always changing. The developers realize that games need change and substance to go with it. Fortnite has been out for years and is still one of the best rated and played games out there. While its evolved over the years and has had it's ups and downs nobody can take away the fact the developers have gone above and beyond with the constant updates. Building is a thing of the past since the zero build mode has come out. It's brought new gamers to Fortnite who hated the building aspect and has been proven to be the new identity to Fortnite (atleast for me, I won't touch the building modes anymore). Building made it incredibly hard for the average gamer to hop on and play. Creative has taken video games to a different outlook as well with the different modes and how people can simply create their own world. I can go on and on, but Fortnite as a whole is a phenomenal game that is worth checking out.",
    accessibility: "Yes",
    difficulty: 7,
    rating: 4.0
  }
]

review_seeds1.each do |each_review|
  user1.reviews.create(each_review)
end

review_seeds2.each do |each_review|
  user2.reviews.create(each_review)
end