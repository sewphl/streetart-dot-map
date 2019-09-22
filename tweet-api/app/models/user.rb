class User < ApplicationRecord
  has_secure_password
  has_many :user_tweets
  has_many :tweets, through: :user_tweets
end
