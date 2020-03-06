Rails.application.routes.draw do
  resources :questions
  resources :categories
  resources :units
  resources :cohorts
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
