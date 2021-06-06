class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :house_id, null: false
      t.integer :score, null: false
      t.string :body, default: "", null: false

      t.timestamps
    end

    add_index :reviews, :house_id
    add_index :reviews, [:user_id, :house_id], unique: true
  end
end
