require_relative "tweet.rb"
require_relative "user.rb"


coffee_dad = User.new("Coffee Dad")

puts coffee_dad.username == "Coffee Dad"

tweet1 = Tweet.new("I need coffee", coffee_dad)
tweet2 = Tweet.new("I heart coffee", coffee_dad)
tweet3 = Tweet.new("Life is a meaningless void", coffee_dad)
puts tweet1.message == "I need coffee"
puts tweet1.user == coffee_dad

puts Tweet.all == [tweet1, tweet2, tweet3]

puts tweet1.username == "Coffee Dad"

tea_uncle = User.new("Tea Uncle")
tweet4 = Tweet.new("Tea is great", tea_uncle)
tweet5 = Tweet.new("Life is a wonderous place", tea_uncle)

puts coffee_dad.tweets == [tweet1, tweet2, tweet3]

tweet6 = coffee_dad.post_tweet("This is a new tweet")

puts Tweet.all[-1].message
puts Tweet.all[-1].username
