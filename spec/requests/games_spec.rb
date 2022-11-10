require 'rails_helper'

RSpec.describe "Games", type: :request do
  describe "GET /index" do
    it "gets a list of games" do
     Game.create(
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

      get '/games'
      game = JSON.parse(response.body)
      expect(response.status).to eq(200)
      expect(game.length).to eq 1 
    end
  end

  describe "GET /show/:id" do 
    it "Shows a single game" do
     newgame = Game.create(
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

    newgame2 = Game.create(
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.callofduty.com%2Fmodernwarfare&psig=AOvVaw1nvEIMsqAsNyRb3PRhqxoq&ust=1668194455229000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNjUmeGqpPsCFQAAAAAdAAAAABAE',
        title: 'Call of Duty®: Modern Warfare®',
        price: 69.99,
        genre: 'FPS',
        release: '2019-10-27',
        description: 'Call of Duty®: Modern Warfare® drops players into an unprecedented global conflict that features the iconic Operators of Task Force 141.',
        player: 'Multiplayer',
        platforms: 'PC, XBOX, Playstation(4/5)',
        developer: 'Infinity Ward, Raven Software, Beenox, Treyarch, High Moon Studios, Sledgehammer Games, Activision Shanghai, Demonware, Toys for Bob'
    )  
     get "/games/#{newgame2.id}"
    expect(response.status).to eq(200)
    end
  end

  
end
