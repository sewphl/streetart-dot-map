class Api::V1::TweetsController < ApplicationController
  def index
    @tweets = Tweet.all
  end

  def new
  end

  def create
    @tweet = Tweet.create(tweet_params)
  end

  private

  def tweet_params
    params.require(:tweet).permit(:text,:user_name,:user_id,:timestamp,:year,:month,:day,:url,:lon,:lat)
  end
end
