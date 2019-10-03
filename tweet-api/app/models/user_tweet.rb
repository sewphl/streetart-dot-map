class UserTweet < ApplicationRecord
  belongs_to :users, optional: true
  belongs_to :tweets, optional: true
end
