# ella = {color: "black", name: "Ella"}

# puts ella[:color]
# puts ella[:name]

# lexi = {color: "orange", name: "Lexi"}
# pup = {colour: "blue", name: "Pup"}

class Cat

    attr_accessor :color, :name, :fluffiness
    attr_reader :number_of_legs

    # attr_writer :name, :fluffiness

    @@all = [] # class variable

    def initialize(name, color, fluffiness, number_of_legs=4)
        @name = name
        @color = color
        @fluffiness = fluffiness
        @number_of_legs = number_of_legs
        @@all << self
    end

    def self.all
        @@all
    end

    def self.all_names
        Cat.all.map {|kitty| kitty.name}
    end

    def self.species # class method
        "Feline"
    end

    def introduce_me
        puts self.name
    end

    def floofy?
        self.fluffiness > 5
    end

    def instance_species
        self.class.species
    end

    def name
        # send email to my mom
        # log this in file
        # download Steven Universe
        @name
    end

    def say_name
        "Hi my name is #{@name}"
    end
end

ella = Cat.new("Ella", "black", 10)
# puts ella.name
# puts ella.color
# puts ella.fluffiness
# puts ella.number_of_legs
lexi = Cat.new("Lexi", "orange", 5, 3)
# puts lexi.number_of_legs
# # puts ella

# ella.name= "Ella Fluffypants"

# puts ella.name
# ella.fluffiness = 10

# lexi = Cat.new
# lexi.fluffiness=4
# puts lexi.fluffiness

# puts ella.introduce_me

# puts ella.floofy?
# puts ella.instance_species

print Cat.all_names