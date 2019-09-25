require 'pry'

class Api::V1::SessionsController < ApplicationController

#  before_filter :current_user, :cors_preflight_check
#  after_filter :cors_set_access_control_headers

#  def cors_set_access_control_headers
#    headers['Access-Control-Allow-Origin'] = '*'
#    headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
#    headers['Access-Control-Allow-Headers'] = '*'
#    headers['Access-Control-Max-Age'] = "1728000"
#  end

  # If this is a preflight OPTIONS request, then short-circuit the
  # request, return only the necessary headers and return an empty
  # text/plain.

#  def cors_preflight_check
#    if request.method == :options
#      headers['Access-Control-Allow-Origin'] = '*'
#      headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
#      headers['Access-Control-Allow-Headers'] = '*'
#      headers['Access-Control-Request-Method'] = '*'
#      headers['Access-Control-Max-Age'] = '1728000'
#      render :text => '', :content_type => 'text/plain'
#    end
#  end

  def create
    ##byebug
    @user = User.find_by(email: params[:session][:email])

    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      render json: @user
    else
      render json: {
        error: "Invalid credentials"
      }
    end
  end

  def get_current_user
    if logged_in?
      ##render json: @user
      render json: current_user
    else
      render json: {
        error: "No one logged in"
      }
    end
  end
end
