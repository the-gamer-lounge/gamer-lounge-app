class Review < ApplicationRecord
  belongs_to :game 
  belongs_to :user
  validates :review, :user_id, :game_id, :accessibility, :difficulty, :rating, presence: true
end
