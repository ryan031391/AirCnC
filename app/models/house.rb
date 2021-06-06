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

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
            .where("lat > ?", bounds[:southWest][:lat])
            .where("lng > ?", bounds[:southWest][:lng])
            .where("lng < ?", bounds[:northEast][:lng])
    end
end
