class Video < ActiveRecord::Base
  attr_accessible :description, :title, :url
  
  belongs_to :listing
end
