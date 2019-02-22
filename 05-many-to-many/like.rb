class Like

    # join table between user and tweet
    attr_reader :user, :tweet
    
    @@all = []

    def initialize(user, tweet)
        @user, @tweet = user, tweet
        @@all << self
    end

    def self.all
        @@all
    end
end

