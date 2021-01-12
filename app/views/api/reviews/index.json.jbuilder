@reviews.each do |review|
    json.set! review.id do 
        json.partial! '/api/reviews/review', review: review 
        json.firstName review.user.first_name

    end
end

