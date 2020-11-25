class Api::ReviewsController < ApplicationController
    def index
        # debugger;
       product = Product.find(params[:product_id]);
       @reviews = product.reviews
        render :index;
    end

    def create
        @review = Review.new(review_params);
        @review.product_id = params[:product_id];
        # @review.author_id = current_user.id;

        if @review.save
            render :show
        else 
            render json: @review, status: :unprocessable_entity
        end
    end

    private

    def review_params
        params.require(:review).permit(:body, :rating, :product_id, :author_id)
    end
end

# connect author id? as well?