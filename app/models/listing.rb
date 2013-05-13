class Listing < ActiveRecord::Base
  attr_accessible :bio, :club, :game_film, :name, :position
  
  belongs_to :player
  
end
