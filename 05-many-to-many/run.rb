require_relative "tweet.rb"
require_relative "user.rb"
require_relative "like.rb"
require 'pry'

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

coffee_dad.like_tweet(tweet4)
tea_uncle.like_tweet(tweet1)
coffee_dad.like_tweet(tweet5)
puts coffee_dad.liked_tweets.include?(tweet4)

puts tweet4.likers.include?(coffee_dad)
puts !tweet4.likers.include?(tea_uncle)
0