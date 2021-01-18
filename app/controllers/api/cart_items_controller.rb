class Api::CartItemsController < ApplicationController
    before_action only: [:index, :update, :delete]

    def index
        if logged_in?
            @cart_items = CartItem.all 
        end
    end

    def show
        @cart_item = CartItem.find(params[:id])
    end

    def create
        
            @cart_item = CartItem.new(cart_items_params);
            @cart_item.buyer_id = current_user.id
            @cart_item.product_id = params[:cart_item][:product_id]
            

            if @cart_item.save
                render :show
            else
                render json: @cart_item.errors.full_messages, status: 422
            end
        
    end

    def update 
        if logged_in?
            @cart_item = CartItem.find(params[:id])
            if @cart_item.update(cart_items_params)
                render :show
            else
                render json: @cart_item.errors.full_messages, status: 422
            end
        end
    end

    def destroy
        if logged_in?
            @cart_item = CartItem.find(params[:id])
            if @cart_item.destroy
                render :show 
            end
        end
    end

    def cart_items_params
        params.require(:cart_item).permit(:buyer_id, :product_id, :total_cost, :quantity, :id)
    end
end
