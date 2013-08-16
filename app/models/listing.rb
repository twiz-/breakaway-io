class Listing < ActiveRecord::Base
  attr_accessible :bio, :film, :player_id
  
  belongs_to :player
  has_many :videos
end
