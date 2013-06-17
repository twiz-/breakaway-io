class RemovePositionFromListing < ActiveRecord::Migration
  def up
    remove_column :listings, :position
  end

  def down
    add_column :listings, :position, :string
  end
end
