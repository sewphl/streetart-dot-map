class User < ApplicationRecord
  has_secure_password
  has_many :tweets_users
  has_many :tweets, through: :tweets_users
end
