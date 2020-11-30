class Api::ReviewsController < ApplicationController

    before_action only: [:create];

    def index
        # debugger;
        if params[:product_id]
            # product = Product.find(params[:product_id]);
            # @reviews = Review.where(product_id: params[:productId]).includes(:author)
            @reviews = Review.where(product_id: params[:product_id])

        else
            @reviews = Review.all
            # @reviews = product.reviews
        end
        render :index;
    end

    def create

        # if logged_in?
            @review = Review.new(review_params);

            if @review.save
                render :show
            else 
                render json: @review.errors.full_messages, status: 422
            end
        # end
    end

    private

    def review_params
        params.require(:review).permit(:body, :rating, :product_id, :author_id, :id)
    end
end

# connect author id? as well?