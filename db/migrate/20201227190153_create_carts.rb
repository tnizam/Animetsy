class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :buyer_id, null: false
      t.integer :total_cost, null: false
      t.integer :quantity, null: false 
      t.integer :product_id, null: false

      t.timestamps
    end

    add_index :carts, :buyer_id, unique: true
    add_index :carts, :product_id, unique: true
  end
end
