class Game < ApplicationRecord
  has_many :reviews 
  has_many :users, through: :reviews
  validates :image, :title, :price, :genre, :release, :description, :player, :platforms, :developer, presence: true
end
