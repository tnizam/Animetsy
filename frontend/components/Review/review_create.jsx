import React from 'react';
import Rating from 'react-rating'
import { withRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/js/all.js';

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

    update(property) {
        return e => this.setState({ [property]: e.currentTarget.value });
    }


        componentDidMount() {
            setState(review)
        }

    render () {
        const { review } = this.props;
        if (!review) {
            return null;
        }

        return (
            <form onSubmit={this.handleSubmit} className='submit-form'>
                <Rating
                    value={this.state.rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    // onChange={this.update('rating')}
                    onClick={this.update('rating')}

                />
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