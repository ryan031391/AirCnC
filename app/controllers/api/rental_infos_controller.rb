class Api::RentalInfosController < ApplicationController
    before_action :require_logged_in

    def create

        @rental_info = current_user.rentals.new(rental_params)

        if @rental_info.save
            render :show
        else
            render json: @rental_info.errors.full_messages, status: 422
        end
    end

    private

    def rental_params
        params.require(:rental_info).permit(:house_id, :check_in, :check_out)
    end
end
