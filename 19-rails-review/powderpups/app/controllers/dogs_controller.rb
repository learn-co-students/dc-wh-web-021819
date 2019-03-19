class DogsController < ApplicationController

  before_action :find_dog, only: [:show, :edit, :update, :destroy]

  def index
    @dogs = Dog.all
  end

  def show 
  end

  def create
    @dog = Dog.create(dog_params)
    redirect_to @dog
  end

  def edit
  end

  def new
    @dog = Dog.ne
  end
  
  def update
    @dog.update(dog_params)
    redirect_to @dog
  end

  def destroy
    @dog.destroy
    redirect_to dogs_path
  end



  private

  def dog_params
    params.require(:dog).permit(:name, :breed, :sled_id)
  end
  
  def find_dog
    @dog = Dog.find(params[:id])
  end

end
