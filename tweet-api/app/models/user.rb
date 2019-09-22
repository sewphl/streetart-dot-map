class User < ApplicationRecord
  has_secure_password
  has_many :users_tweets
  has_many :tweets, through: :users_tweets
end
