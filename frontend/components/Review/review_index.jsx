import React from 'react';
import Rating from 'react-rating';

import ReactStars from "react-rating-stars-component";


class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // authorId: this.props.reviews.author_id
            authorId: this.props.authorId
        }

    }


    componentDidUpdate(prevProps, prevState) {
        this.props.fetchReviews(this.props.productId);

    }

    render() {
        const {reviews} = this.props;
        return (
            <div>
            <div className='reviews-box'>
                <h2 className="review-title">Reviews</h2>
                <ul>
                    {
                        reviews.map(review => {
                        return (
                            <div className="each-review">
                                <div>
                                    <h4 className="review-name">
                                        {review.firstName}</h4>
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