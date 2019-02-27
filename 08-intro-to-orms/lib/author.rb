class Author

    attr_accessor :name, :id

    def initialize(name, id=nil)
        @name = name
        @id = id
    end

    def self.create(name)
        new_author = Author.new(name)
        new_author.save
        new_author
    end

    def save
        if self.id.nil?
            sql = "INSERT INTO authors (name) values (?)"
            DB.execute(sql, self.name)
            sql = "SELECT last_insert_rowid()"
            @id = DB.execute(sql)[0][0]
        else
            sql = "UPDATE authors SET name = ? WHERE id = ?"
            DB.execute(sql, self.name, self.id)
        end
    end

    def self.all
        sql = "SELECT * FROM authors"
        rows = DB.execute(sql)
        rows.map do |row|
            make_object_from_row(row)
        end
    end

    def self.find(id)
        sql = "SELECT * FROM authors WHERE authors.id = (?)"
        row = DB.execute(sql, id)[0] # [[1, J.K.Rowling]]
        make_object_from_row(row)
    end

    def self.find_by_name(name)
        sql = "SELECT * FROM authors WHERE authors.name = (?)"
        row = DB.execute(sql, name)[0]
        make_object_from_row(row)
    end

    def destroy
        sql = "DELETE FROM authors WHERE authors.id = (?)"
        DB.execute(sql, self.id)
    end

    private

    def self.make_object_from_row(row)
        # [1, "J.K. Rowling"]
        Author.new(row[1], row[0])

    end



end


# rowling = Author.create("J.K Rowling")