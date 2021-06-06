class Review < ApplicationRecord
    validates :score, inclusion: { in: (1..5) }
    validates :user_id, :house_id, :score, :body, presence: true
    validates :user_id, uniqueness: { scope: :house_id }

    belongs_to :author,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :house,
        foreign_key: :house_id,
        class_name: :House
end
