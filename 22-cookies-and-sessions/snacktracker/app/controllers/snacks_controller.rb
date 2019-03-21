class SnacksController < ApplicationController

    before_action :get_snack, only: [:show, :update, :edit, :destroy]

  def index
    @snacks = Snack.all
  end

  def show
  end

  def home
    render :home
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
    # check for errors
    if @snack.update(snack_params)
      # we know update was successful
      redirect_to snack_path(@snack)
    else
      # some kind of error
      # show the form again
      # tell the user what the errors were
      # redirect to edit form
      # OR
      # render the edit
      render :edit
      # flash[:errors] = @snack.errors.messages
      # redirect_to "/snacks/#{@snack.id}/edit"
    end
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
    params.require(:snack).permit(:name, :deliciousness, :calories, :retailer_id)
  end

  def get_snack
    @snack = Snack.find(params[:id])
  end
end
