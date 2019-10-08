Rails.application.routes.draw do
  post "/api/v1/post_user_tweets", to: "api/v1/user_tweets#create"
  get "/api/v1/get_tweets", to: "api/v1/tweets#index"
  post "/api/v1/login", to: "api/v1/sessions#create"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"
  delete "/api/v1/logout", to: "api/v1/sessions#destroy"
  namespace :api do
	   namespace :v1 do
	      resources :users
        resources :tweets
        resources :user_tweets
	   end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
