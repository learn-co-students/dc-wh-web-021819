class SnacksController < ApplicationController

    before_action :get_snack, only: [:show, :update, :edit, :destroy]

  def index
    @snacks = Snack.all
  end

  def show
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

  def edit
  end

  def update
    @snack.update(snack_params)
    redirect_to snack_path(@snack)
  end

  def destroy
    @snack.delete
    redirect_to snacks_path
  end

  def heart
  end

  private

  def snack_params
    # strong params
    params.require(:snack).permit(:name, :deliciousness, :calories)
  end

  def get_snack
    @snack = Snack.find(params[:id])
  end
end
