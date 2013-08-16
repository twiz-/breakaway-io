class RemoveFilmFromListing < ActiveRecord::Migration
  def up
    remove_column :listings, :film
  end

  def down
    add_column :listings, :film, :string
  end
end
