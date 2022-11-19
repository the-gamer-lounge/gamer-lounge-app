class Review < ApplicationRecord
  belongs_to :game 
  belongs_to :user
  validates :user_id, :game_id, :accessibility, :difficulty, :rating, :username, presence: true
  validates :review_text, length: {minimum: 300, maximum:1500}, presence: true
  validates :difficulty, numericality: { in: 1..10 }, presence: true 
  validates :rating, numericality: { in: 1..5 }, presence: true
end
