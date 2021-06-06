class RentalInfo < ApplicationRecord
    validates :user_id, :house_id, :check_in, :check_out, presence: true
    
    belongs_to :renter,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :house,
        foreign_key: :house_id,
        class_name: :House
end
