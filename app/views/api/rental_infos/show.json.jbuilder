json.rental_info do
    json.partial! '/api/rental_infos/rental', rental: @rental_info
end

# @rental_info.renters do |renter|
#     json.set! renter.id do
#         json.extract! rental_info.renter, :id, :username
#     end
# end