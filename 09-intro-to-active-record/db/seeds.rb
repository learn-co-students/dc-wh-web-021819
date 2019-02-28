require 'require_all'
require_relative '../config/environment.rb'
require_all 'lib'

Author.find_or_create_by(name: "Mark Twain")
Author.find_or_create_by(name: "Charles Dickens")
Author.find_or_create_by(name: "Maya Angelou")
Author.find_or_create_by(name: "Charlotte Bronte")
Author.find_or_create_by(name: "Shel Silverstein")