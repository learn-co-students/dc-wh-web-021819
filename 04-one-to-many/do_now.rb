# A puppy is initialized with a cuteness score of 5.  A puppy can raise
# its cuteness score by 3 points if it gets groomed, and lower its score
# by 5 points playing in the mud.  

# The following code works, but there are some problems.  Refactor this code 
# to improve it.  (The code can be downloaded from your learn.co page under
# lecture 04)

class Puppy

    attr_reader :name, :cuteness

    def initialize(name)
        @name = name
        @cuteness = 5
    end

    def cuteness=(new_value)
        @cuteness = new_value
        if @cuteness > 10
            @cuteness = 10
        elsif @cuteness < 1
            @cuteness = 1
        end
    end

    def play_in_the_mud
        self.cuteness=(self.cuteness - 5)
    end

    def take_a_bath
        print self
        self.cuteness += 3 
    end    
end

fido = Puppy.new("Fido")
puts fido.cuteness == 5
fido.take_a_bath
puts fido.cuteness == 8
fido.take_a_bath
puts fido.cuteness == 10
# fido.cuteness = 20
# puts fido.cuteness == 10