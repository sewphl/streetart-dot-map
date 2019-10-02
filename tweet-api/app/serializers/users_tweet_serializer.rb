class UsersTweetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :tweet_id
end
