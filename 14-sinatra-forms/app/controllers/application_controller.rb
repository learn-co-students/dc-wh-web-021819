class ApplicationController < Sinatra::Base

    set :views, "app/views"
    set :method_override, true

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

    get "/books/new" do
        erb :new
    end

    get "/books/:id" do 
        book_id = params[:id]
        @book = Book.find(book_id)
        erb :show
    end

    post "/books" do
        author = params[:author]
        title = params[:title]
        snippet = params[:snippet]
        book = Book.create(author: author, title: title, snippet: snippet)
        redirect "books/#{book.id}"
    end

    get "/books/:id/edit" do
        @book = Book.find(params[:id])
        erb :edit
    end

    put "/books/:id" do
        book = Book.find(params[:id])
        byebug
        book.update(author: params[:author],
                     title: params[:title],
                     snippet: params[:snippet])
        redirect "books/#{book.id}"
    end

    delete "/books/:id" do 
        book = Book.find(params[:id])
        book.delete
        redirect "/books"
        # erb :index
    end

end
