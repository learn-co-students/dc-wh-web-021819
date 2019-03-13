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



end
