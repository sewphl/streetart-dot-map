class ChangeUsersTweetsToUserTweets < ActiveRecord::Migration[5.0]
  def change
    rename_table :users_tweets, :user_tweets
  end
end
