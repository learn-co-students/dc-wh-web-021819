require 'pry'

module Swims

    def take_a_trip
        "Going for a dip"
    end

end

module Walks

    def take_a_trip
        "Going for a walk"
    end
end

module Flys

    def take_a_trip
        "I can fly, suckers"
    end

end

class Animal

    attr_accessor :name, :species, :num_legs

    @@all = []

    def initialize(name, species, num_legs)
        @name, @species, @num_legs = name, species, num_legs
        @@all << self
    end

    def self.all
        @@all
    end

    def speak
        "Hello I am a #{self.class}"
    end

end

class Mammal < Animal

    def is_warm_blooded?
        return true
    end
end

class Dog < Mammal

    include Swims
    include Walks

    attr_accessor :age

    def initialize(name, age)
        @age = age
        super(name, "canine", 4)
    end

    def speak
        puts "Bow wow"
        super()
    end

    def say_my_human_age
        return "In human years I am #{human_age}"
    end

    private

    def human_age
        return self.age * 7
    end

end

class Cat < Mammal

    include Swims
    include Walks

    @@all_cats = []

    def initialize(name, num_legs=4)
        super(name, "feline", num_legs)
        @@all_cats << self
    end

    def self.all 
        @@all_cats
    end

    def instance_of?(klass)
        puts "I am the best species.  Way better than a dog."
        super(klass)
    end

end

class Parrot < Animal

    include Flys
    include Walks

    def initialize(name)
        super(name, "birdie", 2)
    end
end

class Fish < Animal

    include Swims

    def initialize(name)
        super(name, "ichthyoid", 0)
    end
end

module Reptile

    class Lizard

    end

    class Snake

    end

end

module Wrestler

    class Snake

    end
end


ella = Cat.new("Ella")
fido = Dog.new("Fido", 4)


binding.pry
0