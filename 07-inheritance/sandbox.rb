class Point

    attr_accessor :x, :y

    def initialize(x, y)
        @x, @y = x, y
    end

    def +(pt2)
        return Point.new(self.x + pt2.x, self.y + pt2.y)
    end

end

pt1 = Point.new(2, 3)
pt2 = Point.new(5, 6)

pt3 = pt1.send(:+, pt2)

puts pt3.x, pt3.y