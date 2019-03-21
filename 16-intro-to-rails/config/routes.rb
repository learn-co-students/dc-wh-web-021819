Rails.application.routes.draw do
  get 'pets/index'
  get 'pets/show'
  get '/pets/about', to: 'pets#about'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
