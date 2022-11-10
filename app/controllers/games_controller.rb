class GamesController < ApplicationController
    def index 
        games = Games.all
        render json: games
    end

    def show
        game = Game.find(params[:id])
        render json: game
    end
end
