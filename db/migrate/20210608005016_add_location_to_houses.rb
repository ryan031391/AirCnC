class AddLocationToHouses < ActiveRecord::Migration[5.2]
  def change
    add_column :houses, :location, :string, null: false
  end
end
