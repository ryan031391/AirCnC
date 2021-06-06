class CreateHouses < ActiveRecord::Migration[5.2]
  def change
    create_table :houses do |t|
      t.integer :owner_id, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :price, null: false
      t.text :description, null: false

      t.timestamps
    end
  end
end
