class SledsController < ApplicationController
  def index
    @sleds = Sled.all
  end

  def show
    @sled = Sled.find(params[:id])
  end

  def edit
    @sled = Sled.find(params[:id])
  end

  def new
    @sled = Sled.new
  end
end
