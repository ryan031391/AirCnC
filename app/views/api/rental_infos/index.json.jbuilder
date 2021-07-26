@rental_infos.each do |rental|
    json.set! rental.id do
        json.partial! 'api/rental_infos/rental', rental: rental
        json.extract! rental.house, :location
    end
end