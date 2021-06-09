json.rental_info do
    json.partial! '/api/rental_infos/rental', rental_info: @rental_info
end