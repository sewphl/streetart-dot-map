class Api::V1::UserTweetsController < ApplicationController
  before_action :set_users_tweet, only: [:show, :update]

  def index
    @favorites = UserTweet.all
    render json: @favorites
  end

  def new
  end

  def create
    @favorite = UserTweet.create(users_tweet_params)
  end

  #GET /users/1
  def show
    render json: @favorites
  end

  private

  def set_users_tweet
    @favorite = UserTweet.find(params[:id])
  end

  def users_tweet_params
    params.require(:users_tweet).permit(:user_id, :tweet_id, :comment)
  end
end
