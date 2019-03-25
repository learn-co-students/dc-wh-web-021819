class ApplicationController < ActionController::Base
    
    helper_method :current_user

    def current_user
        user_id = session["user_id"]
        @current_user ||= User.find_by(id: user_id)
        return @current_user ? @current_user.username : nil
    end

end

