class Api::HousesController < ApplicationController
    def index
        @
    end

    def show

    end

    def create

    end

    def update

    end

    def delete

    end

    private

    def house_params
        params.require(:house).permit(
            :latitude,
            :longitude,
            :price,
            :description
        )
    end
end
