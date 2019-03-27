class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:new, :create, :destroy]

  def new
  end

  def create
    username = params[:username]
    user = User.find_by(username: username)
    if user && user.authenticate(params[:password])
        session["user_id"] = user.id
        redirect_to snacks_path
    else
        flash[:notice] = "No username/password found with that combination"
        render :new
    end
  end

  def destroy
    session.clear
    redirect_to login_path
  end
end
