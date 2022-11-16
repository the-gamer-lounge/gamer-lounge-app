# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

user1 = User.where(email: "test1@example.com",  username: "CODGOD").first_or_create(password: "password", password_confirmation: "password")
user2 = User.where(email: "techlead@example.com", username: "techlead").first_or_create(password: "password", password_confirmation: "password")

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

review_seeds1 = [
  {
    username: user1.username,
    game_id: game1.id,
    review: "Starting with the campaign it was 17 missions long. Overall the missions were great, there were a few that seemed a little too long. The AC-130 mission for example took a little too long, but that's a preference as I prefer to play the boots on the ground missions. There is a mission towards the end that you have to sneak around and while sometimes it got confusing and you die quite a few times you get the hang of it and it becomes thriving. The graphics were great throughout the whole game and the design was very thought out. Moving onto the multiplayer, the maps are lacking... They don't give the same vibe as the previous OG modern warfare. However, the guns, and the weapon tuning are new and exciting. The weapon tuning gives the game a whole new dimension. I hope this gives Warzone a new look. Overall, I'm very happy with the happy thus-far and I look forward to what the future holds.",
    accessibility: "Yes",
    difficulty: 4,
    rating: 4.0
  },
  {
    username: user2.username,
    game_id: game1.id,
    review: "Alright, first things first: this game has shown to be very polarizing. Either you like it, or you hate it. I believe that it's not that simple. I do miss the days when a release date for that game meant that you are getting a complete game ready to go. It's unfortunate to expect incomplete games at launch now, however considering the typical game dev schedule, mistakes are sadly inevitable. The good news is that we are now able to receive updates on-the-fly for games now that allow for constant tweaking and fixing to the game overall to make a product that the team truly wanted from the start. The campaign had many subtle tips of the hat to its record-breaking predecessor, and I have a feeling this game is going to be another juggernaut in the gaming world for years to come, especially considering Activisions new policy on bi-annual game releases over a yearly release, I think the quality of the games are only going to go up from here. Also, the border map is unfairly hated. 500IQ Pro Tip: if you don't like getting killed by all of the cars exploding, blow them up first or get away from them. -GitGüd",
    accessibility: "Yes",
    difficulty: 6,
    rating: 3.8
  }
]



review_seeds2 = [
{
  username: user1.username,
    game_id: game2.id,
    review: "Fortnite is an excellent game that is always changing. The developers realize that games need change and substance to go with it. Fortnite has been out for years and is still one of the best rated and played games out there. While its evolved over the years and has had it's ups and downs nobody can take away the fact the developers have gone above and beyond with the constant updates. Building is a thing of the past since the zero build mode has come out. It's brought new gamers to Fortnite who hated the building aspect and has been proven to be the new identity to Fortnite (atleast for me, I won't touch the building modes anymore). Building made it incredibly hard for the average gamer to hop on and play. Creative has taken video games to a different outlook as well with the different modes and how people can simply create their own world. I can go on and on, but Fortnite as a whole is a phenomenal game that is worth checking out.",
    accessibility: "Yes",
    difficulty: 7,
    rating: 4.7
  },
  {
    username: user2.username,
    game_id: game2.id,
    review: "Free fun but needs to be monitored by an adult, issues should be dealt with as they arise. We play as a family but as they have got older more and more friends are playing and adding them . I make sure they act to some degree as they would in the 'real' world. Respectful of other people. As if it was a paint ball match / lazer tag gameto some degree. Head sets make it hard to hear what others are saying, but keeping communication open and dealing with issues in real time is a must. I have educated them on negatives and positives of multimedia and get them to try to monitor their game playing time as much as possible. They are mostly sensible but sometimes they stay on too long and they can see the negative impact it can have on them. When they grow up they won't have mum and dad to watch over them, so these are life skills they need to have in order to have good mental health. Game play is good but as a part of healthy lifestyle, eating well, active in the real world , reading books and doing art etc. Balance is key and every child is different and i can see their needs change day by day but having a break is good.",
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