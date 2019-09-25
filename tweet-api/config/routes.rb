Rails.application.routes.draw do

##  controller 'api/v1/login' do
##    match '*unmatched_route', :to => 'api/v1/sessions#route_options', via: [:options]
##  end
##  controller 'api/v1/get_current_user' do
##    match '*unmatched_route', :to => 'api/v1/sessions#route_options', via: [:options]
##  end

  ##get "*all" => "sessions#cors_preflight_check", :constraints => { :method => "OPTIONS" }

  post "/api/v1/login", to: "api/v1/sessions#create"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"
  namespace :api do
	   namespace :v1 do
	      resources :users
        resources :tweets
	   end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
