class Api::V1::TweetsController < ApplicationController
  before_action :set_tweet, only: [:show, :update]

  def index
    @tweets = Tweet.all
    render json: @tweets
  end

  def new
  end

  def create
    @tweet = Tweet.create(tweet_params)
  end

  #GET /tweets/1
  def show
    render json: @tweet
  end

  private

  def set_tweet
    @tweet = Tweet.find(params[:id])
  end

  def tweet_params
    params.require(:tweet).permit(:text,:user_name,:user_id,:timestamp,:year,:month,:day,:url,:lon,:lat)
  end
end
