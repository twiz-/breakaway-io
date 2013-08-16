class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :url
      t.string :description
      t.string :title

      t.timestamps
    end
  end
end
