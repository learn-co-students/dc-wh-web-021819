Rails.application.routes.draw do
  # get "/awesome_snacks", to: "snacks#index", as: "snacks"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :snacks, only: [:index, :show, :new, :create]
  root "snacks#home"
end
