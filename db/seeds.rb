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
  genre: 'First Person Shooter',
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

game3 = Game.create(
  image: "https://cdn-ext.fanatical.com/production/product/1280x720/2db0a1c1-3719-4270-b610-a8a1f6c6efb1.jpeg",
  title: "Tom Clancy's Rainbow Six Siege",
  price: 19.99,
  genre: "First Person Shooter",
  release: "2017-12-1",
  description: "Rainbow Six Siege is a high-precision, tactical shooter that prioritises careful planning teamwork and finely tuned tactical play.",
  player: "Single-Player, Multiplayer, Co-Op",
  platforms: "Microsoft Windows, Xbox(One, OneS, OneX), Playstation(4/5), Google Stadia, Amazon Luna",
  developer: "Ubisoft Montreal"
)

game4 = Game.create(
  image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/s/splatoon-3-switch/hero",
  title: "Splatoon 3",
  price: 59.99,
  genre: "Third Person Shooter",
  release: "2022-9-9",
  description: "Splatoon 3 is a third-person shooter game focused on online multiplayer ink battles, in which eight players are divided into two teams of four. Players have two main forms and may switch between the two at will: their humanoid form, in which they can use weapons to spread ink and splat opponents, and their swim form - with a squid or octopus appearance, which, if they enter their team's ink while in the form, allows them to swim through ink at greater speeds, including up walls, recharge their ink tank faster, and hide from opponents.",
  player: "Single-Player, and Multiplayer",
  platforms: "Nintendo Switch",
  developer: "Nintendo EPD"
)

game5 = Game.create(
  image: "https://news.xbox.com/en-us/wp-content/uploads/sites/2/2021/02/Fall-Guys-Key-Art_Thumb_JPG.jpg",
  title: "Fall Guys: Ultimate Knockout",
  price: 0,
  genre: "Battle Royale",
  release: "2020-4-8",
  description: "Fall Guys: Ultimate Knockout is a free-to-play platform battle royale game. The game involves up to 60 players who control jellybean-like creatures and compete against each other in a series of randomly selected mini-games, such as obstacle courses or tag. Players are eliminated as the rounds progress until, eventually, the last remaining player is crowned the winner.",
  player: "Single-Player, and Multiplayer",
  platforms: "Nintendo Switch, Playstation(4/5), Xbox(One, OneS, OneX), Microsoft Windows",
  developer: "Mediatonic"
)

game6 = Game.create(
  image: "https://preview.redd.it/ulg8t3ca9uy71.png?auto=webp&s=bbc5f27258cffe2f9274abdf5d03d43c547b823e",
  title: "Elden Ring",
  price: 39.99,
  genre: "Role Playing Game",
  release: "2020-2-25",
  description: "In Elden Ring, players control a customizable player character on a journey to repair the Elden Ring and become the new Elden Lord. The game is presented through a third-person perspective, with players freely roaming its interactive open world. Gameplay elements include combat using several types of weapons and magic spells, horseback riding, and crafting.",
  player: "Single-Player, and Multiplayer",
  platforms: "Playstation(4/5), Xbox(One, OneS, OneX), Microsoft Windows",
  developer: "FromSoftware"
)
game7 = Game.create(
  image: "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7",
  title: "Cyberpunk 2077",
  price: 59.99,
  genre: "Role Playing Game",
  release: "2020-12-10",
  description: "The story takes place in Night City, an open world set in the Cyberpunk universe. Players assume the first-person perspective of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat. The story follows V's struggle as he deals with a mysterious cybernetic implant that threatens to overwrite his body with the personality and memories of a deceased celebrity only perceived by V; the two must work together if there is any hope to separate the two and save V's life.",
  player: "Single-Player",
  platforms: "Amazon Stadia, Playstation(4/5), Xbox(One, OneS, OneX), Microsoft Windows",
  developer: "CD Projekt Red"
)
game8 = Game.create(
  image: "https://images.livemint.com/img/2020/06/03/1600x900/Valorant_1591218052835_1591218061187.jpg",
  title: "Valorant",
  price: 0,
  genre: "First Person Shooter",
  release: "2020-6-2",
  description: "Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a set of Agents, characters based on several countries and cultures around the world. In the main game mode, players are assigned to either the attacking or defending team with each team having five players on it. Agents have unique abilities, each requiring charges, as well as a unique ultimate ability that requires charging through kills, deaths, orbs, or objectives. Every player starts each round with a classic pistol and one or more signature ability charges. Other weapons and ability charges can be purchased using an in-game economic system that awards money based on the outcome of the previous round, any kills the player is responsible for, and any objectives completed. ",
  player: "Multiplayer",
  platforms: "Microsoft Windows",
  developer: "Riot Games"
)

game9 = Game.create(
  image: "https://i.ytimg.com/vi/q-t5eoh7yfg/maxresdefault.jpg",
  title: "Dead Space",
  price: 59.99,
  genre: "Third Person Shooter",
  release: "2023-1-27",
  description: "Primarily set in a 26th century science fiction universe featuring environments, weapons, and characters typical of the genre, the Dead Space franchise centers on a series of video games beginning with the release of the first Dead Space, which follows an engineer named Isaac Clarke and the mutated undead horrors that surround him. A central theme in the games is the fictional cult religion Unitology and its fanatical followers, who believe that information about an alien artifact called the Marker is being suppressed by the Earth's government. Their primary goal is to use this Marker to bring about the so-called convergence or unification, with the Markers being the source of the undead monsters encountered by the series' protagonists.",
  player: "Single-Player, and Multiplayer",
  platforms: "Playstation 5, Xbox Series X, and PC",
  developer: "Motive Studio, Visceral Games, Firemonkeys Studios, Sumo Digital, Eurocom, IronMonkey Studios, and Motive"
)

game10 = Game.create(
  image: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/m/mario-kart-8-deluxe-switch/hero",
  title: "Mario Kart 8",
  price: 47.99,
  genre: "Racing",
  release: "2014-5-29",
  description: "It retains Mario Kart series game mechanics, where players control Mario franchise characters in kart racing, collecting a variety of items to hinder opponents or gain advantages in the race.",
  player: "Single-Player, and Multiplayer",
  platforms: "Nintendo Switch",
  developer: "Nintendo EAD"
)

game11 = Game.create(
  image: "https://store-images.s-microsoft.com/image/apps.887.14209932322280602.9031c1bf-025a-418d-9759-9d9eca3fc5c1.6f188e0c-63b5-45cc-ac87-79aaaf44a1fc",
  title: "PGA TOUR 2K23",
  price: 59.99,
  genre: "Sports",
  release: "2022-10-11",
  description: "Now featuring playable male and female pros, including Tiger Woods, new licensed courses, more control options, an authentic PGA TOUR MyCAREER, Course Designer, and new MyPLAYER Skills and Archetypes! PGA TOUR 2K23. More Golf. More Game.",
  player: "Single-Player, and Multiplayer",
  platforms: "Playstation(4/5), Xbox(One, OneS, OneX), Microsoft Windows",
  developer: "HB Studios"
)

review_seeds1 = [
  {
    username: user1.username,
    game_id: game1.id,
    review_text: "Starting with the campaign it was 17 missions long. Overall the missions were great, there were a few that seemed a little too long. The AC-130 mission for example took a little too long, but that's a preference as I prefer to play the boots on the ground missions. There is a mission towards the end that you have to sneak around and while sometimes it got confusing and you die quite a few times you get the hang of it and it becomes thriving. The graphics were great throughout the whole game and the design was very thought out. Moving onto the multiplayer, the maps are lacking... They don't give the same vibe as the previous OG modern warfare. However, the guns, and the weapon tuning are new and exciting. The weapon tuning gives the game a whole new dimension. I hope this gives Warzone a new look. Overall, I'm very happy with the happy thus-far and I look forward to what the future holds.",
    accessibility: "Yes",
    difficulty: 4,
    rating: 4.0
  },
  {
    username: user2.username,
    game_id: game1.id,
    review_text: "Alright, first things first: this game has shown to be very polarizing. Either you like it, or you hate it. I believe that it's not that simple. I do miss the days when a release date for that game meant that you are getting a complete game ready to go. It's unfortunate to expect incomplete games at launch now, however considering the typical game dev schedule, mistakes are sadly inevitable. The good news is that we are now able to receive updates on-the-fly for games now that allow for constant tweaking and fixing to the game overall to make a product that the team truly wanted from the start. The campaign had many subtle tips of the hat to its record-breaking predecessor, and I have a feeling this game is going to be another juggernaut in the gaming world for years to come, especially considering Activisions new policy on bi-annual game releases over a yearly release, I think the quality of the games are only going to go up from here. Also, the border map is unfairly hated. 500IQ Pro Tip: if you don't like getting killed by all of the cars exploding, blow them up first or get away from them. -GitGüd",
    accessibility: "Yes",
    difficulty: 6,
    rating: 3.8
  }
]



review_seeds2 = [
{
  username: user1.username,
    game_id: game2.id,
    review_text: "Fortnite is an excellent game that is always changing. The developers realize that games need change and substance to go with it. Fortnite has been out for years and is still one of the best rated and played games out there. While its evolved over the years and has had it's ups and downs nobody can take away the fact the developers have gone above and beyond with the constant updates. Building is a thing of the past since the zero build mode has come out. It's brought new gamers to Fortnite who hated the building aspect and has been proven to be the new identity to Fortnite (atleast for me, I won't touch the building modes anymore). Building made it incredibly hard for the average gamer to hop on and play. Creative has taken video games to a different outlook as well with the different modes and how people can simply create their own world. I can go on and on, but Fortnite as a whole is a phenomenal game that is worth checking out.",
    accessibility: "Yes",
    difficulty: 7,
    rating: 4.7
  },
  {
    username: user2.username,
    game_id: game2.id,
    review_text: "Free fun but needs to be monitored by an adult, issues should be dealt with as they arise. We play as a family but as they have got older more and more friends are playing and adding them . I make sure they act to some degree as they would in the 'real' world. Respectful of other people. As if it was a paint ball match / lazer tag gameto some degree. Head sets make it hard to hear what others are saying, but keeping communication open and dealing with issues in real time is a must. I have educated them on negatives and positives of multimedia and get them to try to monitor their game playing time as much as possible. They are mostly sensible but sometimes they stay on too long and they can see the negative impact it can have on them. When they grow up they won't have mum and dad to watch over them, so these are life skills they need to have in order to have good mental health. Game play is good but as a part of healthy lifestyle, eating well, active in the real world , reading books and doing art etc. Balance is key and every child is different and i can see their needs change day by day but having a break is good.",
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