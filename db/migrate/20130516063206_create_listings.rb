class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :bio
      t.string :name
      t.string :position
      t.string :film
      t.integer :player_id

      t.timestamps
    end
  end
end
