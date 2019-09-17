#!/usr/bin/env ruby
require 'twitter'
require 'json'
require 'nice_hash'
require 'date'
require 'pry'
require 'dotenv/load'

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

    # topics to watch
    topics = ['streetart']
    sClient.filter(:track => topics.join(',')) do |tweet|
        if (tweet.is_a?(Twitter::Tweet) && tweet.uris.length>0 && tweet.geo?)
          ##if tweet.uris.length>0
            ##binding.pry
          ##end
          puts tweet.uris[0].display_url
          puts tweet.geo.coordinates[0]
          puts tweet.geo.coordinates[1]
          puts tweet.created_at.year
          puts tweet.created_at.month
          puts tweet.created_at.day
          puts tweet.created_at.year.to_s + "-" + tweet.created_at.month.to_s + "-" + tweet.created_at.day.to_s
          ##puts tweet.created_at.hour
          ##puts tweet.created_at.min
          ##puts tweet.created_at.sec
          ##puts tweet.text

        end
    end
rescue Exception => e
    puts 'error, waiting for 5s: ' + e.class.to_s
    sleep 5
end
end
