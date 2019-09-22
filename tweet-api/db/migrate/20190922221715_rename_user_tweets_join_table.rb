class RenameUserTweetsJoinTable < ActiveRecord::Migration[5.0]
  def change
    rename_table :user_tweets, :user_tweet
  end
end
