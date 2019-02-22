require 'pry'

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
      cuteness -= 5
        @cuteness = new_value
        if @cuteness > 10
            @cuteness = 10
        elsif @cuteness < 1
            @cuteness = 1
        end
    end

    def play_in_the_mud
        self.cuteness -= 5
    end

    def take_a_bath
      self.cuteness += 3
    end
end

fido = Puppy.new("Fido")
puts fido.cuteness == 5
fido.play_in_the_mud
puts fido.cuteness == 8
fido.take_a_bath
puts fido.cuteness == 10
