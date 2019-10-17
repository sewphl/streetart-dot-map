class CreateTweets < ActiveRecord::Migration[5.0]
  def change
    create_table :tweets do |t|
      t.string :text
      t.string :url
      t.string :user_name
      t.string :user_id
      t.decimal :lon
      t.decimal :lat
      t.datetime :timestamp
      t.integer :year
      t.integer :month
      t.integer :day

      t.timestamps
    end
  end
end
