class CreateRentalInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :rental_infos do |t|
      t.integer :user_id, null: false
      t.integer :house_id, null: false
      t.datetime :check_in, null: false
      t.datetime :check_out, null: false

      t.timestamps
    end

    add_index :rental_infos, :house_id
  end
end
