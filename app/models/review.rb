class Review < ApplicationRecord
    validates :rating, presence: true, inclusion: { in: (1..5) }

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User
end
