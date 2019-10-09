require 'pry'
class Api::V1::UserTweetsController < ApplicationController
  before_action :set_user_tweet, only: [:show, :update]

  def index
    ##binding.pry
    ##@favorites = UserTweet.all
    if logged_in?
      ##binding.pry
      @favorites = UserTweet.where(:user_id => current_user.id)
      ##render json: @favorites
      @my_users = UserTweet.pluck(:tweet_id)
      @user_tweets = Tweet.where(:id => @my_users)
      ##binding.pry
      render json: @user_tweets
    else
      render json: {error: "something"}
    end
  end

  def new
  end

  def create
    @favorite = UserTweet.create(user_tweet_params)
  end

  #GET /users/1
  def show
    render json: @favorites
  end

  private

  def set_user_tweet
    @favorite = UserTweet.find(params[:id])
  end

  def user_tweet_params
    params.require(:user_tweet).permit(:user_id, :tweet_id, :comment)
  end
end
