json.house do 
    json.partial! '/api/houses/house', house: @house
    json.reviewIds @house.reviews.pluck(:id)
    json.rentalIds @house.rentals.pluck(:id)
end

@house.reviews.includes(:author).each do |review|
    json.reviews do
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
        end
    end

    json.authors do
        json.set! review.author.id do
            json.extract! review.author, :id, :username
        end
    end
end

@house.rentals.includes(:renter).each do |rental|
    json.rentals do
        json.set! rental.id do
            json.partial! 'api/rental_infos/rental', rental: rental
        end
    end

    json.renters do
        json.set! rental.renter.id do
            json.extract! rental.renter, :id, :username
        end
    end
end