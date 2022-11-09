class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :image
      t.string :title
      t.float :price
      t.string :genre
      t.date :release
      t.text :description
      t.string :player
      t.string :platforms
      t.string :developer

      t.timestamps
    end
  end
end
