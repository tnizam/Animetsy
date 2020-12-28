class RemoveCartItemBuyerId < ActiveRecord::Migration[5.2]
  def change
    remove_index :cart_items, :buyer_id
  end
end
