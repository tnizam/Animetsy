class CartItem < ApplicationRecord
    validates :buyer_id, :product_id, :total_cost, :quantity, presence: true

    belongs_to :product,
        foreign_key: :product_id,
        class_name: 'Product'

    belongs_to :user,
        foreign_key: :buyer_id,
        class_name: 'User'   
end
