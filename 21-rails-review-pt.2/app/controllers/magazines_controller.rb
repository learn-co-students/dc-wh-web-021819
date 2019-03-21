class MagazinesController < ApplicationController
  def new
    @magazine = Magazine.new
  end

  def create
    magazine = Magazine.create!(mag_params)
    redirect_to magazine_path(magazine)
  end

  def show
    @magazine = Magazine.find(params[:id])
  end

  private

  def mag_params
    params.require(:magazine).permit(:title, :category, :price, :store_id)
  end
end
