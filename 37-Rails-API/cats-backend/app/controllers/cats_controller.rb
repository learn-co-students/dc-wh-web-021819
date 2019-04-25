class CatsController < ApplicationController
  def index
    # cats = Cat.all
    # formated_cats = cats.map { |cat| {id: cat.id, name: cat.name, image: cat.image, breed: cat.breed, fulliness: cat.fluffiness} }
    render json: Cat.all
  end

  def show
    render json: Cat.find(params[:id])#params[:id]
  end

  def create
    render json: Cat.create(cat_params)
  end

  def update
    Cat.find(params[:id]).update(cat_params)
    render json: Cat.find(params[:id])
  end

  def destroy
    render json: Cat.find(params[:id]).destroy()
  end

  def cat_params
    params.require(:cat).permit(:name, :breed, :image, :fluffiness)
  end
end
