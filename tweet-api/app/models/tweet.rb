class Tweet < ApplicationRecord
  has_many :users_tweets
  has_many :users, through: :users_tweets
end
