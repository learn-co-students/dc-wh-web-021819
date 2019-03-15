class SnacksController < ApplicationController

  def index
    @snacks = Snack.all
  end

  def show
    @snack = Snack.find(params[:id])
  end

  def home
    erb :home
  end

  def new
    @snack = Snack.new
  end

  def create
    @snack = Snack.create(snack_params)
    # redirect_to snack_path(@snack)
    redirect_to @snack
  end

  private

  def snack_params
    params.require(:snack).permit(:name, :deliciousness, :calories)
  end

end
