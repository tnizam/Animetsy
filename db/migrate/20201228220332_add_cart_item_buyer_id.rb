class AddCartItemBuyerId < ActiveRecord::Migration[5.2]
  def change
    add_index :cart_items, :buyer_id
  end
end
