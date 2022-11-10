require 'rails_helper'

RSpec.describe Game, type: :model do
    it 'is not valid without an image' do
        game =  Game.create(
            image: '',
            title: 'Call of Duty®: Modern Warfare® II',
            price: 69.99,
            genre: 'FPS',
            release: '2022-10-27',
            description: 'Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.',
            player: 'Multiplayer',
            platforms: 'PC, XBOX, Playstation(4/5)',
            developer: 'Infinity Ward, Raven Software, Beenox, Treyarch, High Moon Studios, Sledgehammer Games, Activision Shanghai, Demonware, Toys for Bob'
          )
        expect(game.errors[:image]).to_not be_empty
      end
    
      it 'is not valid without a title' do
        game =  Game.create(
            image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-000-ARTREVEAL-TOUT.jpg',
            title: '',
            price: 69.99,
            genre: 'FPS',
            release: '2022-10-27',
            description: 'Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.',
            player: 'Multiplayer',
            platforms: 'PC, XBOX, Playstation(4/5)',
            developer: 'Infinity Ward, Raven Software, Beenox, Treyarch, High Moon Studios, Sledgehammer Games, Activision Shanghai, Demonware, Toys for Bob'
          )
        expect(game.errors[:title]).to_not be_empty
      end
    
      it 'is not valid without a price' do
        game =  Game.create(
            image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-000-ARTREVEAL-TOUT.jpg',
            title: 'Call of Duty®: Modern Warfare® II',
            price: '',
            genre: 'FPS',
            release: '2022-10-27',
            description: 'Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.',
            player: 'Multiplayer',
            platforms: 'PC, XBOX, Playstation(4/5)',
            developer: 'Infinity Ward, Raven Software, Beenox, Treyarch, High Moon Studios, Sledgehammer Games, Activision Shanghai, Demonware, Toys for Bob'
          )
        expect(game.errors[:price]).to_not be_empty
      end
    
      it 'is not valid without a genre' do
        game =  Game.create(
            image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-000-ARTREVEAL-TOUT.jpg',
            title: 'Call of Duty®: Modern Warfare® II',
            price: 69.99,
            genre: '',
            release: '2022-10-27',
            description: 'Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.',
            player: 'Multiplayer',
            platforms: 'PC, XBOX, Playstation(4/5)',
            developer: 'Infinity Ward, Raven Software, Beenox, Treyarch, High Moon Studios, Sledgehammer Games, Activision Shanghai, Demonware, Toys for Bob'
          )
        expect(game.errors[:genre]).to_not be_empty
      end
    
      it 'is not valid without a release date' do
        game =  Game.create(
            image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-000-ARTREVEAL-TOUT.jpg',
            title: 'Call of Duty®: Modern Warfare® II',
            price: 69.99,
            genre: 'FPS',
            release: '',
            description: 'Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.',
            player: 'Multiplayer',
            platforms: 'PC, XBOX, Playstation(4/5)',
            developer: 'Infinity Ward, Raven Software, Beenox, Treyarch, High Moon Studios, Sledgehammer Games, Activision Shanghai, Demonware, Toys for Bob'
          )
        expect(game.errors[:release]).to_not be_empty
      end
    
      it 'is not valid without a description' do
        game =  Game.create(
            image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-000-ARTREVEAL-TOUT.jpg',
            title: 'Call of Duty®: Modern Warfare® II',
            price: 69.99,
            genre: 'FPS',
            release: '2022-10-27',
            description: '',
            player: 'Multiplayer',
            platforms: 'PC, XBOX, Playstation(4/5)',
            developer: 'Infinity Ward, Raven Software, Beenox, Treyarch, High Moon Studios, Sledgehammer Games, Activision Shanghai, Demonware, Toys for Bob'
          )
        expect(game.errors[:description]).to_not be_empty
      end
    
      it 'is not valid without a player mode' do
        game =  Game.create(
            image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-000-ARTREVEAL-TOUT.jpg',
            title: 'Call of Duty®: Modern Warfare® II',
            price: 69.99,
            genre: 'FPS',
            release: '2022-10-27',
            description: 'Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.',
            player: '',
            platforms: 'PC, XBOX, Playstation(4/5)',
            developer: 'Infinity Ward, Raven Software, Beenox, Treyarch, High Moon Studios, Sledgehammer Games, Activision Shanghai, Demonware, Toys for Bob'
          )
        expect(game.errors[:player]).to_not be_empty
      end
    
      it 'is not valid without compatible platforms' do
        game =  Game.create(
            image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-000-ARTREVEAL-TOUT.jpg',
            title: 'Call of Duty®: Modern Warfare® II',
            price: 69.99,
            genre: 'FPS',
            release: '2022-10-27',
            description: 'Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.',
            player: 'Multiplayer',
            platforms: '',
            developer: 'Infinity Ward, Raven Software, Beenox, Treyarch, High Moon Studios, Sledgehammer Games, Activision Shanghai, Demonware, Toys for Bob'
          )
        expect(game.errors[:platforms]).to_not be_empty
      end
    
      it 'is not valid without the developer(s)' do
        game =  Game.create(
            image: 'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-000-ARTREVEAL-TOUT.jpg',
            title: 'Call of Duty®: Modern Warfare® II',
            price: 69.99,
            genre: 'FPS',
            release: '2022-10-27',
            description: 'Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141.',
            player: 'Multiplayer',
            platforms: 'PC, XBOX, Playstation(4/5)',
            developer: ''
          )
        expect(game.errors[:developer]).to_not be_empty
      end
end
