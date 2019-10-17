class RenameUserTweetsJoinTableAgain < ActiveRecord::Migration[5.0]
  def change
    rename_table :user_tweet, :users_tweets
  end
end
