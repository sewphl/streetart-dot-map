class Api::V1::UserTweetsController < ApplicationController
  before_action :set_user_tweet, only: [:show, :update]

  def index
    ##@favorites = UserTweet.all
    @favorites = UserTweet.where(:user_id => current_user.id)
    render json: @favorites
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
