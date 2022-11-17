class Review < ApplicationRecord
  belongs_to :game 
  belongs_to :user
  validates :user_id, :game_id, :accessibility, :difficulty, :rating, :username, presence: true
  validates :review, length: {minimum: 300, maximum:1500}, presence: true
end
