class ApplicationController < ActionController::API
    # before_action :authenticated

    def encode_token(payload)
        # payload => {beef: "steak"}
        token = JWT.encode(payload, get_secret)
    end

    def decode_token(token)
        payload = JWT.decode(token, get_secret)[0]
    end

    def auth_header
      request.headers["Authorization"]
    end

    def header_token
      if auth_header.present?
        auth_header.split(' ')[1]
      end
    end

    def user_logged_in?
      # check the token
      # how do we get the token?
      # how do we check it?
      if header_token.present?
        payload = decode_token(header_token)
        user = User.find(payload['user_id'])
        return user.present?
      else
        false
      end
    end

    def authenticated
      if !user_logged_in?
        render json: { success: false, message: "Not Authorized to delete paintings" }, status: 401
      end
    end

    def get_secret
        return "shhh, it's a secret"
    end
end
