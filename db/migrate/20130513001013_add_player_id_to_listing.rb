class AddPlayerIdToListing < ActiveRecord::Migration
  def change
    add_column :listings, :player_id, :integer
  end
end
