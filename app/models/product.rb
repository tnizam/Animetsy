# == Schema Information
#
# Table name: products
#
#  id           :bigint           not null, primary key
#  product_name :string           not null
#  description  :string           not null
#  price        :integer          not null
#  seller_id    :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Product < ApplicationRecord
    validates :seller_id, presence: true
    validates :product_name, :description, :price, presence: true

    has_one_attached :photo

    belongs_to :user,
        foreign_key: :seller_id,
        class_name: 'User'

    has_many :reviews,
        foreign_key: :product_id,
        class_name: 'Review'

    has_many :cart_items,
        foreign_key: :product_id,
        class_name: 'CartItem'
    
end
