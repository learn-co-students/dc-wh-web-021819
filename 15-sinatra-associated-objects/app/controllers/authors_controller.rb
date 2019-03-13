class AuthorsController < Sinatra::Base
    set :views, "app/views/authors"
    set :method_override, true


    get "/authors" do 
        @authors = Author.all
        erb :index
    end

    get "/authors/new" do
        # gets empty author form
        erb :new

    end

    get "/authors/:id" do
        @author = Author.find(params[:id])
        erb :show
    end



    post "/authors" do 
        # processes form to create new author
        author = Author.find_or_create_by(name: params[:name])
        params[:books].each do |book_hash|
            if !(book_hash[:title] == "" || book_hash[:snippet] == "")
             Book.create(author: author, title: book_hash[:title], snippet: book_hash[:snippet])
            end
        end
        redirect "/authors/#{author.id}"
    end

end