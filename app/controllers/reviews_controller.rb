class ReviewsController < ApplicationController

  def index
    reviews = Review.all
    render json: reviews
  end

  def show
    review = Review.find(params[:id])
    render json: review
  end
  
  def create 
    review = Review.create(review_params)
    if review.valid?
      render json: review
    else 
      render json: review.errors, status: 422
      p review.errors
    end
  end

  def update
    review = Review.find(params[:id])
    review.update(review_params)
    if review.valid?
      render json: review
    else
      render json: review.errors, status: 422
    end
  end

  def destroy
    review = Review.find(params[:id])
    if review.destroy
      render json: review
    else
      render json: review.errors, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:game_id, :user_id, :review, :accessibility, :difficulty, :rating, :username)
  end

end
