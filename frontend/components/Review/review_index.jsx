import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authorId: this.props.reviews.author_id
        }
    }

    componentDidMount() {
        this.props.fetchReviews(this.props.productId);
    }

    render() {
        const {reviews} = this.props;
        const author = this.props.users[this.state.authorId];

        if(author === undefined) return null;

        return (
            <div>
            <div className='reviews-box'>
                <h2>Reviews</h2>
                <h3>{author.first_name}</h3>
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