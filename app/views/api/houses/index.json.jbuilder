@houses.each do |house|
    json.set! house.id do
        json.partial! 'house', house: house
        json.reviewIds []
        json.rentalIds []
    end
end