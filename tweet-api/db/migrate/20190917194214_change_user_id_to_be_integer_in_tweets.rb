class ChangeUserIdToBeIntegerInTweets < ActiveRecord::Migration[5.0]
  def change
    change_column :tweets, :user_id, :integer
  end
end
