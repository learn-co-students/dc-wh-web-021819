class ApplicationController < Sinatra::Base

    set :views, "app/views"

    get "/" do
        @gems = ["Pearl", "Amethyst", "Garnet"]
        erb :home
    end

    get "/hi/lane" do 
        "Totally"
    end

    get "/hi/:name" do 
        "Hi #{params[:name]}"
    end

    get "/books" do 
        # displays a list of all of our books
        @books = Book.all 
        erb :index
    end

    get "/books/:id" do 
        book_id = params[:id]
        @book = Book.find(book_id)
        erb :show
    end
end
