class AddCommentToUserTweets < ActiveRecord::Migration[5.0]
  def change
    add_column :user_tweets, :comment, :string
  end
end
