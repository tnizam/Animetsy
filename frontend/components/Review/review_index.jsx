import React from 'react';
import Rating from 'react-rating';
import ReviewIndexItem from './review_index_item';

import ReactStars from "react-rating-stars-component";


class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorId: this.props.reviews.author_id
        }
    }


    componentDidUpdate() {
        this.props.fetchReviews(this.props.productId);
    }

    render() {
        const {reviews} = this.props;
        console.log(reviews)
        return (
            <div>
            <div className='reviews-box'>
                <h2>Reviews</h2>
                <ul>
                    {
                        reviews.map(review => {
                        return (
                            <div>
                                <div>
                                    <h4>{review.firstName}</h4>
                                </div>
                                <Rating
                                    initialRating={review.rating}
                                    emptySymbol="far fa-star"
                                    fullSymbol="fas fa-star"
                                    readonly={true}
                                />
                                
                                <div>
                                    {review.body}
                                </div>
                                
                                
                            </div>
                        
                        )})
                    }
                </ul>
            </div>
            </div>
        )
    }

}

export default ReviewIndex;