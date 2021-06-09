json.rental_info do
    json.partial! '/api/rental_infos/rental', rental: @rental_info
end