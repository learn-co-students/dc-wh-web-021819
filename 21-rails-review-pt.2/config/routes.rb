Rails.application.routes.draw do
  get 'magazines/new'
  post '/magazines', to: 'magazines#create'
  get 'magazines/:id', to: 'magazines#show', as: 'magazine'

  resources :stores, only: [:index, :show, :new, :create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
