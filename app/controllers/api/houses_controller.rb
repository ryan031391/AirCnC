# require 'httparty'

class Api::HousesController < ApplicationController
    before_action :require_logged_in, only: [:create]

    def index
        houses = bounds ? House.in_bounds(bounds) : House.all
        @houses = houses.includes(:reviews, :rentals)
        render :index
    end

    def show
        @house = House.find(params[:id])
    end

    def create
        # response = HTTParty.get("https://maps.googleapis.com/maps/api/geocode/json?address=#{location}&key=AIzaSyAUADNSH9nyJqtTLTKdArLj6OhTs918GGg")
        @house = House.create!(house_params)
        render :show
    end

    def update

    end

    def delete

    end

    private

    def bounds
        params[:bounds]
    end

    def location
        params[:location]
    end

    def house_params
        params.require(:house).permit(
            :location,
            :latitude,
            :longitude,
            :price,
            :description
        )
    end
end
