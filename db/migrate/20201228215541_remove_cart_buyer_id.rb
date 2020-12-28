class RemoveCartBuyerId < ActiveRecord::Migration[5.2]
  def change
    change_column :cart_items, :buyer_id, :integer, {unique: false}
  end
end
