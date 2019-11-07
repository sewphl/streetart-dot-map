require 'twitter'
require 'date'
require 'pry'
require 'dotenv-rails'

class TweetCreator

  def get_tweet
    i = 0
    while true
    begin
        config = {
          consumer_key: ENV['CONSUMER_KEY'],
          consumer_secret: ENV['CONSUMER_SECRET'],
          access_token: ENV['ACCESS_TOKEN'],
          access_token_secret: ENV['ACCESS_TOKEN_SECRET']
        }
        rClient = Twitter::REST::Client.new(config)
        sClient = Twitter::Streaming::Client.new(config)
        bearer_token = rClient.token
        # topics to watch
        topics = ['streetart']
        sClient.filter(:track => topics.join(',')) do |tweet|
            puts "in the loop"
            if (tweet.is_a?(Twitter::Tweet) && tweet.uris.length>0 && tweet.geo?)  ##&& tweet.uris.length>0 && tweet.geo?
              Tweet.create(:text => tweet.text,:user_name => tweet.user.name,
                :user_id => tweet.user.id,:timestamp => tweet.created_at,
                :year => tweet.created_at.year,:month => tweet.created_at.month,
                :day => tweet.created_at.day, :url => tweet.uris[0].expanded_url,
                :lon => tweet.geo.coordinates[0], :lat => tweet.geo.coordinates[1])
              puts tweet.text
            end
            puts i
            i += 1
            if i >= 5
              break
            end
        end
    rescue Exception => e
        puts 'error, waiting for 3s: ' + e.class.to_s
        sleep 3
    end
    end
  end

end
