class Api::V1::PaintingsController < ApplicationController

  before_action :authenticated, only: [:destroy]

  def index
    @paintings = Painting.all
    render json: @paintings
  end

  def show
    @painting = Painting.find_by(slug: params[:slug])
    render json: @painting
  end

  def create

  end

  def update

  end

  def destroy
    # only logged in users
    # should be able to destroy paintings


    # find the painting
    painting = Painting.find_by(id: params[:id])
    # delete it
    if painting
      painting.destroy
    end

    # send back some 'deletion successful'
    render json: { success: true, message: "painting #{params[:id]} deleted" }
  end
end
