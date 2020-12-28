import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import Rating from 'react-rating';
import {connect} from 'react-redux';
import '@fortawesome/fontawesome-free/js/all.js';

const ReviewIndexItem = ({review, author}) => {

    // if(author === undefined) return null;

    return (
        <div>
            <div>
                {/* {author.first_name} */}
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
    )
};

// const mSTP = ({entities: {users}}, {review}) => {
//     return {
//         author: users[review.author_id]
//     }
// }

// const mSTP = (state) => {
//     return {
//         author: state.entities.users[state.entities.reviews.author_id]
//     }
// }


// export default (connect(mSTP)(ReviewIndexItem));
export default withRouter(ReviewIndexItem);