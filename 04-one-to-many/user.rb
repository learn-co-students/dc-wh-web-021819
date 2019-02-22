class User

    attr_reader :username

    def initialize(username)
        @username = username
    end

    def tweets
        # returns an array of all tweets by this user

        # call Tweet.all and select the tweets with this 
        # user as the user

        Tweet.all.select do |tweet|
            tweet.user == self
        end
    end

    def post_tweet(message)

    end
end

