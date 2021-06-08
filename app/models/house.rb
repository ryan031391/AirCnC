class House < ApplicationRecord
    validates :owner_id, :location, :latitude, :longitude, :price, :description, presence: true

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
        self.where("latitude < ?", bounds[:north])
            .where("latitude > ?", bounds[:south])
            .where("longitude > ?", bounds[:west])
            .where("longitude < ?", bounds[:east])
    end

    def average_score
        reviews.average(:score)
    end
end
