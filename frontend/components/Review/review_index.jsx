import React from 'react';
import Rating from 'react-rating';
import '@fortawesome/fontawesome-free/js/all.js';

import ReactStars from "react-rating-stars-component";
import CartItem from '../Cart Item/cart_item';


class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorId: this.props.authorId,
            reviewId: this.props.reviewId,
            hideUpdate: false,
            body: "",
            rating: 1
        }
        // console.log("state", this.state)

        this.handleDeleteReview = this.handleDeleteReview.bind(this)
        this.toggleUpdate = this.toggleUpdate.bind(this)
        this.handleUpdateReview = this.handleUpdateReview.bind(this)
        this.updateReview = this.updateReview.bind(this)
        this.updateRating = this.updateRating.bind(this)
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.productId)
    }

    toggleUpdate() {
        this.setState({hideUpdate: !this.state.hideUpdate})
    }

    updateReview(property) {
        return e => this.setState({ [property]: e.target.value})
    }
    updateRating(property) {
        return e => this.setState({ [property]: e})
    }

    handleUpdateReview(review) {
        return(e) => this.props.updateReview({
            product_id: review.productId,
            author_id: review.authorId,
            id: review.id,
            body: this.state.body,
            rating: this.state.rating
        }).then(() => window.location.reload())
    }

    handleDeleteReview(reviewId) {
        // e.preventDefault();
        return() =>
        this.props.destroyReview(reviewId).then(() => 
            window.location.reload());
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
                                
                                <div className="updates-container">
                                    <div>
                                        {this.props.authorId === review.authorId ? 
                                        <button 
                                            className="review-buttons"    
                                            onClick={this.handleDeleteReview(review.id)}>Delete</button>
                                        : null
                                        }
                                    </div>

                                    {(this.props.authorId !== review.authorId) ? null :
                                        <div>
                                            <button 
                                                className="review-buttons"
                                                onClick={this.toggleUpdate}>Update</button>

                                            {this.state.hideUpdate ? 
                                            <div className="rev-update-container">
                                                <Rating
                                                    initialRating={this.state.rating}                                                    
                                                    emptySymbol="far fa-star"
                                                    fullSymbol="fas fa-star"
                                                    onChange={this.updateRating('rating')}
                                                />
                                                <textarea cols="30" rows="10" 
                                                value={this.state.body}
                                                onChange={this.updateReview('body')}></textarea> 
                                                <button
                                                    className="update-submit" 
                                                    onClick={this.handleUpdateReview(review)}>Submit Update</button> 
                                            </div>
                                            
                                            : null}
                                        </div>                                                                        
                                    }
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