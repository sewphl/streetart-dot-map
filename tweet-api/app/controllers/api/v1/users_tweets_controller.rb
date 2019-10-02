class Api::V1::UsersTweetController < ApplicationController
  before_action :set_users_tweet, only: [:show, :update]

  def index
    @favorites = UsersTweet.all
    render json: @favorites
  end

  def new
  end

  def create
    @favorite = UsersTweet.create(users_tweet_params)
  end

  #GET /users/1
  def show
    render json: @favorites
  end

  private

  def set_users_tweet
    @favorite = UsersTweet.find(params[:id])
  end

  def users_tweet_params
    params.require(:users_tweet).permit(:user_id, :tweet_id)
  end
end
