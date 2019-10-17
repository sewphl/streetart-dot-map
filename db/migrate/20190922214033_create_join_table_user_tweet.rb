class CreateJoinTableUserTweet < ActiveRecord::Migration[5.0]
  def change
    create_join_table :users, :tweets do |t|
      t.index [:user_id, :tweet_id]
    end
  end
end
