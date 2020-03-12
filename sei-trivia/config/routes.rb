Rails.application.routes.draw do
    post '/auth/login', to: 'authentication#login'
    get '/auth/verify', to: 'authentication#verify'
    get '/questions/:cat_id', to: 'questions#show_by_cat'
    resources :questions
    resources :categories
    resources :units
    resources :cohorts
    resources :users
    # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
