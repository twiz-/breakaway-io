class RemoveNameFromListing < ActiveRecord::Migration
  def up
    remove_column :listings, :name
  end

  def down
    add_column :listings, :name, :string
  end
end
