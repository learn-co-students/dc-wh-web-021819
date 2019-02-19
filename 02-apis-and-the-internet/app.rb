require 'rest-client'
require 'json'
require 'pry'

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="

def get_search_term
    puts "Welcome to my book library query tool."
    puts "Enter a search term: "
    search_term = gets.chomp
    return search_term
end

def get_google_books_json(search_term)
    url = GOOGLE_BOOKS_API_BASE_URL + search_term
    response = RestClient.get(url)
    json = JSON.parse(response)
    return json
end

def parse_json(json)
    # json["items"][0]["volumeInfo"]["title"]
    all_books = []
    json["items"][0..10].each do |book_info|
        title = book_info["volumeInfo"]["title"]
        authors = book_info["volumeInfo"]["authors"]
        description = book_info["volumeInfo"]["description"]
        all_books << {"title": title, "authors": authors, "description": description}
    end
    return all_books
end

def format_authors(author_array)
    if author_array.nil?
        return "Author Unknown"
    elsif author_array.length == 1
        return author_array[0]
    elsif author_array.length == 2
        return author_array.join(" and ")
    else
        return author_array[0...-1].join(", ") + ", and " + author_array[-1]
    end        
end

def display_results(book_arr)
    # iterate over array of hashes and display title, author, and description
    book_arr.each do |book|
        puts "Title: #{book[:title]}\n"
        authors = format_authors(book[:authors])
        puts "Author: #{authors}\n"
        puts "Description: #{book[:description]}\n"
        puts "**************\n\n"
    end
end

def main
    search_word = ""
    while search_word == ""
        search_word = get_search_term
    end
    json = get_google_books_json(search_word)
    if !json["items"].nil?
        book_hash = parse_json(json)
        display_results(book_hash)
    else
        puts "No results found"
    end
end



main
