require 'twitter'
require 'date'
require 'pry'
require 'dotenv-rails'

class TweetCreator

  attr_accessor :text, :user_name, :user_id, :timestamp, :year, :month, :day

  def initalize(text, user_name, user_id, timestamp, year, month, day)
    @text = text
    @user_name = user_name
    @user_id = user_id
    @timestamp = timestamp
    @year = year
    @month = month
    @day = day
  end

  def get_tweet
    ##binding.pry
    while true
    begin
        config = {
          consumer_key: ENV['CONSUMER_KEY'],
          consumer_secret: ENV['CONSUMER_SECRET'],
          access_token: ENV['ACCESS_TOKEN'],
          access_token_secret: ENV['ACCESS_TOKEN_SECRET']
        }
        ##binding.pry
        rClient = Twitter::REST::Client.new(config)
        sClient = Twitter::Streaming::Client.new(config)
        bearer_token = rClient.token
        # topics to watch
        topics = ['streetart']
        binding.pry
        sClient.filter(:track => topics.join(',')) do |tweet|
            ##puts "whee"
            if (tweet.is_a?(Twitter::Tweet) )  ##&& tweet.uris.length>0 && tweet.geo?
              ##puts "whee2"
              ##binding.pry
              ##Tweet.create!(:text => tweet.text,
              ##:user_name => tweet.user.name, :user_id => tweet.user.id,
              ##:timestamp => tweet.created_at, :year => tweet.created_at.year,
              ##:month => tweet.created_at.month, :day => tweet.created_at.day)
              ##binding.pry
              ##sClient.update(:text => tweet.text)

            end
        end
    rescue Exception => e
        puts 'error, waiting for 3s: ' + e.class.to_s
        sleep 3
    end
    end

    ##binding.pry
  end

end
