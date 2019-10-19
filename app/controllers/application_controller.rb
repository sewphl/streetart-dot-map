class ApplicationController < ActionController::API
  include ::ActionController::Cookies

    def fallback_index_html
      render :file => 'public/index.html'
    end

    def current_user
      User.find_by(id: session[:user_id])
    end

    def logged_in?
      !!current_user
    end
end
