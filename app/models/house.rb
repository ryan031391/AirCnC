class House < ApplicationRecord
    validates :owner_id, :latitude, :longitude, :price, :description, presence: true

    has_many :reviews,
        foreign_key: :house_id,
        class_name: :Review

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :rentals,
        foreign_key: :house_id,
        class_name: :RentalInfo
end
