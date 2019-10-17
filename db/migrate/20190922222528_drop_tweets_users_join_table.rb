class DropTweetsUsersJoinTable < ActiveRecord::Migration[5.0]
  def change
    drop_table :tweets_users
  end
end
