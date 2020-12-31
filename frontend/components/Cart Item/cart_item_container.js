import { connect } from 'react-redux';
import CartItem from './cart_item';
import {} from '../../actions/cart_item_actions';

const mSTP = (state) => {
    return {
        cartItems: Object.values(state.entities.cartItems),
        currentUser: state.entities.users[state.session.id]
    };
};

const mDTP = dispatch => {
    return {
        
    }
};

export default connect(mSTP, mDTP)(CartItem);