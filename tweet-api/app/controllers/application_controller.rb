class ApplicationController < ActionController::API
  helpers do
    def current_user
      ##mock version of being logged in.
      User.first
    end

    def logged_in?
      !!current_user
    end
  end
end
