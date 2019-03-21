Rails.application.routes.draw do
  # get "/awesome_snacks", to: "snacks#index", as: "snacks"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "snacks#home"
  resources :snacks
  resources :retailers do
    resources :snacks, {only: [:show]}
  end

  get "/i-heart-snacks", to: "snacks#heart", as: "heart"
end
