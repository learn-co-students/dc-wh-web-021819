 class Backer

    attr_accessor :backed_projects, :name

    def initialize(name)
        @name = name
        @backed_projects = []
    end

    def back_project(project)
        BackerProject.new(self, project)
    end

    def backed_project_names
        self.backed_projects.collect {|proj| proj.name}
    end
end

class Project

    attr_accessor :backers, :name

    def initialize(name)
        @name = name
        @backers = []
    end

    def add_backer(backer)
        
    end
end

class BackerProjects

    attr_reader :backer, :project

    def initialize(backer, project)
        @backer, @project = backer, project
    end

end
hoverboard = Project.new('Hoverboard')
shoes = Project.new("Self lacing shoes")

marty = Backer.new("Marty McFly")

hoverboard.add_backer(marty)
marty.back_project(shoes)

print marty.backed_project_names