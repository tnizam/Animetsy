# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :email, presence: true, uniqueness: true 
    validates :session_token, presence: true, uniqueness: true 
    validates :first_name, presence: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    has_many :products,
        foreign_key: :seller_id,
        class_name: 'Product'

    has_many :reviews,
        foreign_key: :author_id,
        class_name: 'Review'

    has_many :cart_items,
        foreign_key: :buyer_id,
        class_name: 'CartItem'

    attr_reader :password 
    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        return nil unless user && user.is_password?(password)
        user 
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64
        self.save!
        self.session_token
    end
end
