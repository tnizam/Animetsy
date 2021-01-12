class Api::ReviewsController < ApplicationController

    before_action only: [:create];

    def index
        # debugger;
        if params[:product_id]
            @reviews = Review.where(product_id: params[:product_id])

        else
            @reviews = Review.all
            # @reviews = product.reviews
        end
        render :index;
    end

    def show 
        @review = Review.find(params[:id]);
    end

    def create
        # debugger;
        if logged_in?
            @review = Review.new(review_params);
            @review.author_id = current_user.id
            @review.product_id = params[:product_id]
            
            if @review.save
                @reviews = Review.all
                render :index
            else 
                render json: @review.errors.full_messages, status: 422
            end
        end
    end

    private

    def review_params
        params.require(:review).permit(:body, :rating, :product_id, :author_id, :id)
    end
end

# connect author id? as well?