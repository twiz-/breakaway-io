class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.string :name
      t.string :position
      t.string :club
      t.string :bio
      t.string :game_film

      t.timestamps
    end
  end
end
