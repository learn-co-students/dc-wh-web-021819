class Author < ActiveRecord::Base

    has_many :books

    BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='


    def author_url(max_results = 20)
      "#{BASE_URL}#{self.author_sanitizer}&maxResults=#{max_results}"
    end

    def author_sanitizer
      self.name.gsub(/\W+/, '').downcase
    end

end