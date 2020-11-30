import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.productId);
    }

    render() {
        const {reviews} = this.props;

        return (
            <div>
            <div className='reviews-box'>
                <h2>Reviews</h2>
                <ul>
                    {
                        reviews.map(review => <ReviewIndexItem
                            review={review}
                            key={review.id}
                        />)
                    }
                </ul>
            </div>
            </div>
        )
    }

}

export default ReviewIndex;