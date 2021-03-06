class User < ApplicationRecord

    has_secure_password

    validates :name, presence: true
    validates :username, uniqueness: true, length: {maximum: 13}
    validates :password, presence: :true, length: {minimum: 6}, on: :create

end
