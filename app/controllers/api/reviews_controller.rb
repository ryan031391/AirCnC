class Api::ReviewsController < ApplicationController
    before_action :require_logged_in

    def create
      @review = current_user.reviews.new(review_params)
  
      if @review.save
        render :show
      else
        # render json: @review, status: :unprocessable_entity
        render json: @review.errors.full_messages, status: 422
      end
    end
  
    private
  
    def review_params
      params.require(:review).permit(:score, :body, :house_id)
    end
end
