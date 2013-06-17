class Listing < ActiveRecord::Base
  attr_accessible :bio, :film, :name, :player_id
  
  belongs_to :player
end
