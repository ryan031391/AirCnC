json.partial! "api/users/user", user: @user

@user.rentals.includes(:house).each do |rental|
    json.rentals do
        json.set! rental.house.id do
            json.extract! rental.house, :id, :location
        end
    end

    json.extract! rental, :id, :house_id, :check_in, :check_out
end