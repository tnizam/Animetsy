@cart_items.each do |cart_item|
    json.set! cart_item.id do 
        json.partial! '/api/cart_items/cart_item', cart_item: cart_item
        json.name cart_item.product.product_name
        json.price cart_item.product.price
        json.photoUrl url_for(cart_item.product.photo)

    end
end