require_relative '../config/environment'

class Author < ActiveRecord::Base

    def say_hello_mod_1
        puts "'Sup"
    end

end