class FavoritesController < ApplicationController

  # before_action :authorized

  def new
    @snacks = Snack.all
  end

  def create
    snack_ids = params[:snack_ids]
    snack_ids.each do |id|
        new_snack = Snack.find(id)
        if !current_user.snacks.include?(new_snack)
            current_user.snacks << new_snack
        end
    end
    redirect_to snacks_path
  end
end
