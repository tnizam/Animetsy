import React from 'react';
import Rating from 'react-rating'
import { withRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';
import ReactStars from "react-rating-stars-component";


class ReviewCreate extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            body: '',
            rating: 1,
            productId: this.props.productId,
            authorId: this.props.review.authorId
        };

        // this.state.review;
        this.update = this.update.bind(this);
        this.updateReview = this.updateReview.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {

        e.preventDefault();
        const productId = this.props.match.params.productId;
        const review = Object.assign({}, this.state, {
            product_id: productId
        });
        this.props.createReview(review, productId);
        // this.navProductShow();

    }

    updateReview(property) {
        return e => this.setState({ [property]: e})
    }

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }

    render () {
        const { review } = this.props;
        if (!review) {
            return null;
        }

        return (
            <form onSubmit={this.handleSubmit} className='submit-form'>
                <Rating
                    initialRating={this.state.rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    onChange={this.updateReview('rating')}
                />
                {/* <ReactStars
                    count={4}
                    size={15}
                    activeColor="#ffd700"
                    value={this.state.rating}
                    // emptySymbol="far fa-star"
                    // fullSymbol="fas fa-star"
                    onChange={this.updateReview('rating')}
                /> */}
                
                <textarea 
                    value={this.state.body}
                    onChange={this.update('body')}
                    className='review-textarea'
                    rows="4"
                    cols='50'
                />

                <input className='review-submit' type="submit" value="Submit Review"/>
            </form>
        )
    }

}

export default withRouter(ReviewCreate);