class School

    attr_reader :name, :instructors

    def initialize(name)
        @name = name
        @instructors = []
    end

    def add_instructor(instructor_name)
        @instructors << instructor_name
    end


end

class Instructor

    attr_accessor :name

    def initialize(name)
        @name = name
    end

end

flatiron = School.new("Flatiron")

lane = Instructor.new("Lane Miller")
trevor = Instructor.new("Trevor Trevorson")
paul = Instructor.new("Paul Nichols")

flatiron.add_instructor(lane)
flatiron.add_instructor(trevor)
flatiron.add_instructor(paul)

paul.name = "Paul Nicholsen"

print flatiron.instructors

