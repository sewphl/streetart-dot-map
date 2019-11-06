desc "Add streetart geolocated tweets with associated URL to db"
task :get_tweets => :environment do
  puts "Getting tweets and adding to db..."
  TweetCreator.new.get_tweet
  puts "done."
end
