class Api::ProductsController < ApplicationController

    def index
        @products = Product.all
    end

    def show 
        @product = Product.find
    end

    def product_params
        params.require(:product).permit(:product_name, :description, :price) 
        # add :seller_id when adding in seller profile and view and name
    end
end
