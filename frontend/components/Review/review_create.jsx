import React from 'react';
import Rating from 'react-rating'
import { withRouter } from 'react-router-dom';

class ReviewCreate extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            body: '',
            rating: 1
            // productId: this.props.review.productId,
            // authorId: this.props.review.authorId
        };

        // this.state.review;
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // // const productId = parseInt(this.props.match.params.productId);
        // // let review = Object.assign({}, this.state, {
        // //     product_id: productId
        // // });
        // // this.props.createReview(review);

        // const review = this.state;
        // this.setState({review:""});
        // // this.props.createReview(review, this.props.review.productId);
        // this.props.createReview(review);

        this.props.createReview(this.state, this.props.productId);
        this.setState({body: "", rating: 1});

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
                    onChange={this.update('rating')}
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