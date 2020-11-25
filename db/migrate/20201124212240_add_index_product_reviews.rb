class AddIndexProductReviews < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, :product_id
  end
end
