class StoresController < ApplicationController
  def index
    @stores = Store.all
  end

  def show
    @store = Store.find(params[:id])
  end

  def new
    @store = Store.new
    @store.magazines.build
    @store.magazines.build
    @store.magazines.build
    @store.magazines << Magazine.new
    # byebug
  end

  def create
    @store = Store.create!(store_params)
    redirect_to @store
  end

  def destroy
    Store.find(params[:id]).destroy
    redirect_to stores_path
  end

  private

  def store_params
    params.require(:store).permit(:name, :city, magazines_attributes: [:title, :category])
    # params => { store: {:name, :city, magazines_attributes: [{:title, :category ]} }
  end
end
