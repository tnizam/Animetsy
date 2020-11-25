class RemoveUniqueReviews < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, :product_id
  end
end
