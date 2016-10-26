class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    # render json: @pokemon
    # see routes to see why you don't need this
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    # render json: @pokemon
  end
end
