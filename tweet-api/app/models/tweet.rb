class Tweet < ApplicationRecord
  has_many :tweets_users
  has_many :users, through: :tweets_users
end
